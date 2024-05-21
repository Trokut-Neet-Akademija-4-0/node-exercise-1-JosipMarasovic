import express from 'express';
import {
  getCart,
  addItemToCart,
  createCustomerAndAddToCart,
  removeProductFromCart,
  clearCart
} from '../controllers/cartController';

const router = express.Router();

router.get('/:customerId', getCart);
router.post('/add/:customerId', addItemToCart);
router.post('/createCustomerAndAddToCart', createCustomerAndAddToCart);
router.delete('/remove/:customerId/:productId', removeProductFromCart);
router.delete('/clear/:customerId', clearCart);

export default router;