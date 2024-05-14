
import Category from "../entities/Category"
import Products from "../entities/Products"
import HttpError from "../utils/HttpError"
import Popular from "../entities/Popular";
import { FindManyOptions, FindOptions } from "typeorm";

class ProductsService{


    async getAllProducts(): Promise<Products[]>{
        return Products.find({
            relations:{
                images :true
            }

        })
    }

    async getProductById(id:number):Promise<Products> {
        const foundProduct = await Products.findOne({
            relations:{
                images: true
            },
            where:{
                productId:id
            }
        })
        if(!foundProduct)
            throw new HttpError(404, `Product with id ${id} not found`)

        return foundProduct
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



}

export default new ProductsService