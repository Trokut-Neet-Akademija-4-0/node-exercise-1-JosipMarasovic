

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
}

export default new PopularService()