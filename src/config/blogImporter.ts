import fs from 'fs';
import { parse } from 'csv';
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
      .filter((file) => file.isFile() && file.name.split('.').pop() === 'csv')
      .map((file) => file.name);

    try {
      for await (const fileName of allFilePathsInDirectory) {
        const alreadyImported = await FileImportTracker.exists({
          where: {
            name: fileName,
          },
        });

        if (alreadyImported) continue;

        const parser = await fs
          .createReadStream(
            path.join(process.env.IMPORTS_FOLDER_PATH, fileName),
            'utf8'
          )
          .pipe(
            parse({
              // CSV options if any
              delimiter: ',',
            })
          );

        for await (const record of parser) {
          const blog = BlogImporter.convertCSVRecordToBlogEntity(record);
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

  private static convertCSVRecordToBlogEntity(record: string[]): Blog {
    const blog = new Blog();
    blog.title = record[0];
    blog.content = record[1];
    return blog;
  }
}
