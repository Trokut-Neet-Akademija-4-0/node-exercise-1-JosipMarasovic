
import CartProduct from "../models/cartProductModel"
import HttpError from "../utils/HttpError"
import ICart from "../models/interfaces/cartInterface"
import userCart from '../models/cartModel'
import productDetailServices from "./productDetailServices"

class CartService {
    private cart: ICart = userCart

  getCart(): ICart {
    return this.cart
  }

  addProductById(id: number): ICart {
    this.changeProductQuantity(id, 1)
    this.updateCartInformation()
    return this.cart
  }

  deleteProductById(id: number): ICart {
    const indexToDelete = this.getCartProductIndexByProductId(id)

    if (indexToDelete < 0)
      throw new HttpError(404, `Cart product with id ${id} not found`)

    this.cart.products.splice(indexToDelete, 1)
    this.updateCartInformation()
    return this.cart
  }

  
  clearCart(): ICart {
    this.cart.products = []
    this.updateCartInformation()
    return this.cart
  }

  changeProductQuantity(productId: number, quantityModifier: number): void {
    const product = productDetailServices.getProductById(productId)

    try {
      const existingCartProduct = this.getCartProductByProductId(product.id)
      if (existingCartProduct.quantity + quantityModifier > 0)
        existingCartProduct.quantity += quantityModifier
      else this.deleteProductById(existingCartProduct.id)
    } catch (error) {
      if (error instanceof HttpError)
        this.cart.products.push(
          new CartProduct(
            this.getNextAvailableCartProductId(),
            product,
            quantityModifier,
          ),
        )
    }
  }

  getCartProductByProductId(id: number): CartProduct {
    const foundCartProduct = this.cart.products.find(
      (cartProduct) => cartProduct.product.id === id,
    )
    if (!foundCartProduct)
      throw new HttpError(404, `Cart product with product id ${id} not found`)
    return foundCartProduct
  }

  getCartProductIndexByProductId(id: number): number {
    const cartProductIndex = this.cart.products.findIndex(
      (cartProduct) => cartProduct.product.id === id,
    )
    if (cartProductIndex < 0)
      throw new HttpError(404, `Cart product with product id ${id} not found`)
    return cartProductIndex
  }

  getNextAvailableCartProductId(): number {
    let greatestId = 0
    this.cart.products.forEach((cartProduct) => {
      greatestId = cartProduct.id > greatestId ? cartProduct.id : greatestId
    })
    return greatestId + 1
  }

  updateCartInformation() {
    let totalQuantity = 0
    let total = 0
    let totalDiscounted = 0
    this.cart.products.forEach((cartProduct) => {
      const totalProductPrice = cartProduct.quantity * cartProduct.product.price
      total += totalProductPrice
      totalDiscounted +=
        totalProductPrice -
        totalProductPrice * (cartProduct.product.discountPercentage / 100)
      totalQuantity += cartProduct.quantity
    })

    this.cart.total = total
    this.cart.discountedTotal = totalDiscounted
    this.cart.totalProducts = this.cart.products.length
    this.cart.totalQuantity = totalQuantity
  }

}

export default new CartService()