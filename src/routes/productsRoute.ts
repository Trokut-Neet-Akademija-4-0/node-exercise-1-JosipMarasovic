import express, { Request, Response } from 'express'
import {getAllProducts,getProductById,getCategoryProductsById,getPopularProducts} from '../controllers/ProductsController'


const router = express.Router()


router.get('/',getAllProducts)
router.get('/popular',getPopularProducts)
router.get('/:id',getProductById)
router.get('/category/:categoryId', getCategoryProductsById);






export default router