import Product from "../models/interfaces/productinterface";
import products from "../models/productModel";
import HttpError from "../utils/HttpError";



class PopularService{
    private products : Product [] = products



    getPopularProducts() :Product[] {
        return this.products

    }

    getProductById(id:number): Product {

      const foundProduct = this.products.find((product) => product.id === id)
      if (!foundProduct) {
        throw new HttpError(404, `Product with id ${id} not found`);
    }
        return foundProduct;
    }

    createProduct(newProduct : Product) : Product {
        this.products.push(newProduct);
        return newProduct
    }
    updateProduct(id: number, updateProducts: Product): Product {
        const index = this.products.findIndex((product) => product.id === id);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updateProducts };
            return this.products[index];
        }
        throw new HttpError(404, `Product with id ${id} not found`);
    }

    deleteProduct(id: number): Product  {
        const index = this.products.findIndex((product) => product.id === id);
        if (index !== -1) {
            const deletedProduct = this.products.splice(index, 1)[0];
            return deletedProduct;
        }

        throw new HttpError(404, `Product with id ${id} not found`);
       
    }

    
}

export default new PopularService()