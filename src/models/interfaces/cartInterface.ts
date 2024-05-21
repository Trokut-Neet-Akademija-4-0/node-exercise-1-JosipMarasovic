import CartProduct from "../cartProductModel"

interface ICart{
    id : number
    total : number
    products: CartProduct[]
    discountedTotal: number
    userId: number
    totalProducts: number
    totalQuantity: number   
}

export default ICart