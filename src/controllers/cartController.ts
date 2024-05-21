// controllers/cartController.ts

import { Request, Response } from 'express';
import cartService from '../services/cartService';

const getCart = async (req: Request, res: Response) => {
  const customerId = parseInt(req.params.customerId, 10);
  try {
    const cartItems = await cartService.getCartItems(customerId);
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "not found" });
  }
};

const addItemToCart = async (req: Request, res: Response) => {
  const customerId = parseInt(req.params.customerId, 10);
  const { productId, quantity } = req.body;
  try {
    const updatedCart = await cartService.addItemToCart(customerId, productId, quantity);
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: "not found" });
  }
};

const createCustomerAndAddToCart = async (req: Request, res: Response) => {
  const { customerData, productId, quantity } = req.body;
  try {
    const updatedCart = await cartService.createCustomerAndAddToCart(customerData, productId, quantity);
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: "not found" });
  }
};

const removeProductFromCart = async (req: Request, res: Response) => {
  const customerId = parseInt(req.params.customerId, 10);
  const productId = parseInt(req.params.productId, 10);
  try {
    const updatedCart = await cartService.removeProductFromCart(customerId, productId);
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: "not found" });
  }
};

const clearCart = async (req: Request, res: Response) => {
  const customerId = parseInt(req.params.customerId, 10);
  try {
    await cartService.clearCart(customerId);
    res.json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ error: "not found" });
  }
};

export { getCart, addItemToCart, createCustomerAndAddToCart, removeProductFromCart, clearCart };
