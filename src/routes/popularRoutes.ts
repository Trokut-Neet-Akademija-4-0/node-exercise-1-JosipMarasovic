import express, { Request, Response } from 'express'

import {getPopularProducts,getProductById,updateProduct,deleteProduct,createProduct} from '../controllers/popularController'


const router = express.Router()

router.get('/',getPopularProducts)

router.get('/:id',getProductById)
  
router.post('/',createProduct)
   
router.put('/:id', updateProduct)
  
router.delete('/:id', deleteProduct)
   

export default router