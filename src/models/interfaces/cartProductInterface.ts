import Product from "./productinterface"

// interface za cart product
interface ICartProduct {
  id: number
  product: Product
  quantity: number
}

export default ICartProduct
