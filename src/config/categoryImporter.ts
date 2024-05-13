import fs from 'fs';
import { parse } from 'csv';
import path from 'path';
import Category from '../entities/Category';
import FileImportTracker from '../entities/FileImportTracker';

export default class CategoryImporter {
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
              columns: false, 
            })
          );

        for await (const record of parser) {
          const category = CategoryImporter.convertCSVRecordToBlogEntity(record);
          await category.save();
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

  private static convertCSVRecordToBlogEntity(record: string[]): Category {
    const category = new Category();
    category.categoryname = record[0];
    return category;
  }
}
