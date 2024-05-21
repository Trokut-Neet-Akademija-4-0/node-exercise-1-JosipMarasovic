
import Category from "../entities/Category"
import Products from "../entities/Products"
import HttpError from "../utils/HttpError"
import Popular from "../entities/Popular";
import { FindManyOptions, FindOptions } from "typeorm";
import path from "path";
import fs from 'fs';
import Images from "../entities/Images";

class ProductsService{


    async getAllProducts(): Promise<Products[]>{
        return Products.find({
            relations:{
                images :true
            }

        })
    }

    async getProductById(id: number): Promise<Products> {
        const foundProduct = await Products.findOne({
            relations: {
                images: true
            },
            where: {
                productId: id
            }
        });

        if (!foundProduct) {
            throw new HttpError(404, `Product with id ${id} not found`);
        }

        const imagesDirectory = path.join(__dirname, '../../images/products', foundProduct.productId.toString());

        console.log('Checking images in directory:', imagesDirectory); 

        if (fs.existsSync(imagesDirectory)) {
            const imageFiles = fs.readdirSync(imagesDirectory).map(fileName => {
                console.log('Found image file:', fileName); 
                const newImage = new Images();
                newImage.imageId = fileName; 
                newImage.imageUrl = fileName;
                newImage.product = foundProduct;
                return newImage;
            });
            foundProduct.images = imageFiles;
        } else {
            console.log('No images directory found for product:', foundProduct.productId);
        }

        return foundProduct;
    }
   

   /* async getCategories(): Promise<Category[]> {
        try {
          const categories = await Category.find();
          return categories;
        } catch (error) {
          throw new Error(`No categories found`);
        }
      }*/
    

      async getCategories(): Promise<{ categoryId: number, categoryname: string | null }[]> {
        try {
          console.log("Fetching categories from the database...");
          const categories = await Category.find({
            select: ["categoryId", "categoryname"]
          });
          if (categories.some(category => isNaN(category.categoryId))) {
            throw new Error("Invalid category ID found");
          }
          console.log("Fetched categories:", categories);
          return categories;
        } catch (error) {
          console.error("Error fetching categories:", error);
          throw new Error(`Error fetching categories: `);
        }
      }
      
      
   
    async getProductsByCategoryId(categoryId: number): Promise<Products[]> {
        const options: FindManyOptions<Products> = {
            where: { category: { categoryId } },
            relations: { images: true }
        };
        return Products.find(options);
    }
   

    async getPopularProducts(): Promise<Products[]> {
        
        const popularProducts = await Products.find({
            where: {
                popular: true
            },
            relations: { images: true }

        });

        console.log(popularProducts)
        return popularProducts;
    }

    async getPopularProductsByCategoryId(categoryId: number): Promise<Products[]> {
        const options: FindManyOptions<Products> = {
            where: {
                category: { categoryId },
                popular: true
            },
            relations: { images: true }
        };
        const popularProducts = await Products.find(options);
        if (!popularProducts.length) {
            throw new HttpError(404, `No popular products found for category with id ${categoryId}`);
        }
        return popularProducts;
    }



}

export default new ProductsService