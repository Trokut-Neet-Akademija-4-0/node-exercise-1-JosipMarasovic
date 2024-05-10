
import Category from "../entities/Category"
import Products from "../entities/Products"
import HttpError from "../utils/HttpError"
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

   
    async getCategoryByName(categoryName: string): Promise<Category | null> {
        return Category.findOne({ where: { categoryname: categoryName } });
    }

    async getProductsByCategoryName(categoryName: string): Promise<Products[]> {
        const category = await this.getCategoryByName(categoryName);
        if (!category) {
            throw new Error(`Category with name '${categoryName}' not found`);
        }
        return this.getProductsByCategory(category.categoryId);
    }

    async getProductsByCategory(categoryId: number): Promise<Products[]> {
        const options: FindManyOptions<Products> = {
            where: { category: { categoryId } },
            relations: { images: true }
        };
        return Products.find(options);
    }



}

export default new ProductsService