import { ICategoryItem } from "../models/interfaces/categoryInterface";
import categoryProducts from "../models/categoryModel";

class CategoryService {
    private categoryProducts : ICategoryItem [] = categoryProducts

    getAllProductsFromSingleCategory(category: string): ICategoryItem[] {
        const productsInCategory: ICategoryItem[] = this.categoryProducts.filter(product => product.title.toLowerCase() === category.toLowerCase());
        return productsInCategory;
    }

    createCategoryItem(newCategoryItem: ICategoryItem): void {
        this.categoryProducts.push(newCategoryItem);
    }

    getCategoryItemById(id: number): ICategoryItem | undefined {
        return this.categoryProducts.find(product => product.id === id);
    }

    updateCategoryItemById(id: number, updatedCategoryItem: ICategoryItem): ICategoryItem | undefined {
        const index = this.categoryProducts.findIndex(product => product.id === id);
        if (index !== -1) {
            this.categoryProducts[index] = updatedCategoryItem;
            return this.categoryProducts[index];
        }
        return undefined;
    }

    deleteCategoryItemById(id: number): ICategoryItem | undefined {
        const index = this.categoryProducts.findIndex(product => product.id === id);
        if (index !== -1) {
            const deletedProduct = this.categoryProducts.splice(index, 1)[0];
            return deletedProduct;
        }
        return undefined;
    }

}


export default new CategoryService