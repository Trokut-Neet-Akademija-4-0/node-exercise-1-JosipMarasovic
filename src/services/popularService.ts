import Product from "../models/interfaces/productinterface";
import products from "../models/productModel";



class PopularService{
    private products : Product [] = products



    getPopularProducts() :Product[] {
        return this.products

    }

    getProductById(id:string): Product | undefined {

        return this.products.find((product) => product.id === id)
    }

    createProduct(newProduct : Product) : Product {
        this.products.push(newProduct);
        return newProduct
    }

    updateProduct(id:string,updateProducts : Product) : Product | undefined {
        const index = this.products.findIndex(product => product.id === id)
        if(index !== -1){
            this.products[index] = {...this.products[index], ...updateProducts}
            return this.products[index]
        } 
         return undefined;
    }

    deleteProduct(id:string) : Product | undefined {
        const index = this.products.findIndex(product => product.id === id)
        if(index !== -1){
            const deleteProduct = this.products[index]
            this.products.splice(index,1)
            return deleteProduct
        }
        return undefined;

    }
}

export default new PopularService()