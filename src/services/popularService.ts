

interface Product {
    id: string
    title:string
    description : string
    brand : string
    price : number
  }


class PopularService{
    private products : Product [] = []


    constructor () {
        this.products.push({ id: '1', title: 'Product 1', description: 'Description of Product 1', brand: 'Brand 1', price: 10.99 });
        this.products.push({ id: '2', title: 'Product 2', description: 'Description of Product 2', brand: 'Brand 2', price: 20.49 });
        this.products.push({ id: '3', title: 'Product 3', description: 'Description of Product 3', brand: 'Brand 3', price: 30.79 });
    }


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