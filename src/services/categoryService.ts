import { ICategoryItem } from "../models/interfaces/categoryInterface";
import categoryProducts from "../models/categoryModel";
import HttpError from "../utils/HttpError";


class CategoryService {
    private categoryProducts : ICategoryItem [] = categoryProducts

    getAllProductsFromSingleCategory(category: string): ICategoryItem[] {
        const productsInCategory: ICategoryItem[] = this.categoryProducts.filter(product => product.title.toLowerCase() === category.toLowerCase());
        return productsInCategory;
    }

    createCategoryItem(newCategoryItem: ICategoryItem): void {
        this.categoryProducts.push(newCategoryItem);
    }

    getCategoryItemById(id: number): ICategoryItem {
       
        const foundCategoryItem = this.categoryProducts.find(product => product.id === id);
        if(!foundCategoryItem)
            throw  new HttpError(404, `Category product with id ${id} not found`)
        return foundCategoryItem
       
       
    }

    updateCategoryItemById(id: number, updatedCategoryItem: ICategoryItem): ICategoryItem {
        const index = this.categoryProducts.findIndex(product => product.id === id);
        if (index !== -1) {
            this.categoryProducts[index] = updatedCategoryItem;
            return this.categoryProducts[index];
        }else{
            throw  new HttpError(404, `Category product with id ${id} not found`)
        }

      
          
      
        
    }

    deleteCategoryItemById(id: number): ICategoryItem{
        const index = this.categoryProducts.findIndex(product => product.id === id);
        if (index !== -1) {
            const deletedProduct = this.categoryProducts.splice(index, 1)[0];
            return deletedProduct;
        }
        throw new HttpError (404, `Category product with id ${id} not found`)
    }

}


export default new CategoryService