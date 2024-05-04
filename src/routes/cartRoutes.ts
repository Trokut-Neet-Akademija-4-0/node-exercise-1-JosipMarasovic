import express from 'express'
import {
  getCart,
 
  removeProductFromCart,
  clearCart,
} from '../controllers/cartController'

const router = express.Router()


router.get('/', getCart)



router.delete('/remove/:productId', removeProductFromCart)

router.delete('/clear', clearCart)

export default router
