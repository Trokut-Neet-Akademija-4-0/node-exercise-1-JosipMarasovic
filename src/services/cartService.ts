// services/cartService.ts

import Customer from "../entities/Customer";
import Basket from "../entities/Basket";
import Products from "../entities/Products";

interface CustomerData {
  name: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zipCode: number;
  deliveryInstructions?: string;
}

class CartService {
  async createCustomerIfNotExist(customerData: CustomerData) {
    let customer = await Customer.findOne({ where: { email: customerData.email } });
    if (!customer) {
      customer = Customer.create(customerData);
      await customer.save();
    }
    return customer;
  }

  async createCustomerAndAddToCart(customerData: CustomerData, productId: number, quantity: number) {
    const customer = await this.createCustomerIfNotExist(customerData);
    return this.addItemToCart(customer.customerId, productId, quantity);
  }

  async getCartItems(customerId: number) {
    return await Basket.find({ where: { customer: { customerId } }, relations: ['product'] });
  }

  async addItemToCart(customerId: number, productId: number, quantity: number) {
    let basket = await Basket.findOne({ where: { customer: { customerId }, product: { productId } } });
    if (basket) {
      basket.quantity = (basket.quantity || 0) + quantity;
    } else {
      const product = await Products.findOne({ where: { productId } });
      const customer = await Customer.findOne({ where: { customerId } });
      if (!product || !customer) {
        throw new Error("Product or Customer not found");
      }
      basket = Basket.create({ customer, product, quantity, price: product.price });
    }
    return await basket.save();
  }

  async removeProductFromCart(customerId: number, productId: number) {
    const basket = await Basket.findOne({ where: { customer: { customerId }, product: { productId } } });
    if (basket) {
      await Basket.remove(basket);
    }
    return this.getCartItems(customerId);
  }

  async clearCart(customerId: number) {
    const baskets = await Basket.find({ where: { customer: { customerId } } });
    await Basket.remove(baskets);
  }
}

export default new CartService();
