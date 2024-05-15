import express from 'express'
import {getAllProducts,getProductById,getCategoryProductsById,getPopularProducts,getPopularProductsByCategoryId} from '../controllers/ProductsController'


const router = express.Router()


router.get('/',getAllProducts)
router.get('/popular',getPopularProducts)
router.get('/:id',getProductById)
router.get('/category/:categoryId', getCategoryProductsById)
router.get('/category/:categoryId/popular',getPopularProductsByCategoryId)

export default router