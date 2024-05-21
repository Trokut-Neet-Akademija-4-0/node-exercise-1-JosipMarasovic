/* eslint-disable prefer-destructuring */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
import fs from 'fs';
import { parse } from 'csv';
import path from 'path';
import Products from '../entities/Products'; 
import FileImportTracker from '../entities/FileImportTracker';
import Category from '../entities/Category';

export default class ProductImporter {
  static async loadAllProducts(): Promise<void> {
    if (!process.env.IMPORTS_FOLDER_PATH_PRODUCTS) { 
      console.log('Import folder path not specified.');
      return;
    }

    const allFilePathsInDirectory = (
      await fs.promises.readdir(process.env.IMPORTS_FOLDER_PATH_PRODUCTS, {
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
            path.join(process.env.IMPORTS_FOLDER_PATH_PRODUCTS, fileName),
            'utf8',
          )
          .pipe(
            parse({
              // CSV options if any
              delimiter: ',',
            }),
          );

        for await (const record of parser) {
          const product = ProductImporter.convertCSVRecordToProductEntity(record); // Change to use convertCSVRecordToProductEntity
          await (await product).save();
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

  private static async convertCSVRecordToProductEntity(record: string[]): Promise<Products> {
    const product = new Products(); 
   
    product.title = record[0];
    product.description = record[1];
    product.price = Number.parseInt(record[2]) ;
    product.discountPercentage = Number.parseInt(record[3]); 
    product.quantity = Number.parseInt(record[4]) ; 
    product.thumbnail = record[5];
    product.popular = record[6].toLowerCase() === 'true';
    const categoryId: number = parseInt(record[7]);
    const category = await Category.findOne({ where: { categoryId } });
  
    if (category) {
      product.category = category;
    } else {
      console.error(`Category with ID ${categoryId} not found.`);
    }
    
    return product;
  }
  
}
