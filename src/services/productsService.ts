
import Category from "../entities/Category"
import Products from "../entities/Products"
import HttpError from "../utils/HttpError"

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

   
       
         
    
    async getAllProductsFromCategory(categoryName: string): Promise<Products[]> {
        const category = await Category.findOne({
            where: {
                categoryname: categoryName
            }
        });
        if (!category) {
            throw new HttpError(404, `Category with name '${categoryName}' not found`);
        }
        return Products.find({
            relations: {
                images: true
            },
            where: {
                category: category
            }
        });
    }



}

export default new ProductsService