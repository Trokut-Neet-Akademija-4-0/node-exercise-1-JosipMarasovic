import Product from "../models/interfaces/productinterface";
import products from "../models/productModel";



class PopularService{
    private products : Product [] = products



    getPopularProducts() :Product[] {
        return this.products

    }

    getProductById(id:number): Product | undefined {

        return this.products.find((product) => product.id === id)
    }

    createProduct(newProduct : Product) : Product {
        this.products.push(newProduct);
        return newProduct
    }
    updateProduct(id: number, updateProducts: Product): Product | undefined {
        const index = this.products.findIndex((product) => product.id === id);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updateProducts };
            return this.products[index];
        }
        return undefined;
    }

    deleteProduct(id: number): Product | undefined {
        const index = this.products.findIndex((product) => product.id === id);
        if (index !== -1) {
            const deletedProduct = this.products.splice(index, 1)[0];
            return deletedProduct;
        }
        return undefined;
    }

    
}

export default new PopularService()