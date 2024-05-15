import fs from 'fs';
import path from 'path';
import Blog from '../entities/Blog';
import FileImportTracker from '../entities/FileImportTracker';

export default class BlogImporter {
  static async loadAllBlogs(): Promise<void> {
    if (!process.env.IMPORTS_FOLDER_PATH) {
      console.log('Import folder path not specified.');
      return;
    }

    const allFilePathsInDirectory = (
      await fs.promises.readdir(process.env.IMPORTS_FOLDER_PATH, {
        withFileTypes: true,
      })
    )
      .filter((file) => file.isFile() && file.name.split('.').pop() === 'json')
      .map((file) => file.name);

    try {
      for await (const fileName of allFilePathsInDirectory) {
        const alreadyImported = await FileImportTracker.exists({
          where: {
            name: fileName,
          },
        });
        if (alreadyImported) continue;

        

        const filePath = path.join(process.env.IMPORTS_FOLDER_PATH, fileName);
        const jsonContent = await fs.promises.readFile(filePath, 'utf-8');
        const blogs = JSON.parse(jsonContent);

        for (const record of blogs) {
          const blog = BlogImporter.convertJSONToBlogEntity(record);
          await blog.save();
        }

        const importTracker = new FileImportTracker();
        importTracker.name = fileName;
        await importTracker.save();

        console.log(`Imported file: ${fileName}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  private static convertJSONToBlogEntity(jsonData: any): Blog {
    const blog = new Blog();
    blog.title = jsonData.title;
    blog.content = jsonData.content;
    blog.images = jsonData.images
    return blog;
  }
}
