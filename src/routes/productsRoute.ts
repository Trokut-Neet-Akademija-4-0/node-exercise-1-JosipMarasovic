import express, { Request, Response } from 'express'
import {getAllProducts,getProductById,getAllProductsFromCategory} from '../controllers/ProductsController'


const router = express.Router()


router.get('/',getAllProducts)
router.get('/:id',getProductById)
router.get('/:/category/:categoryName',getAllProducts)





export default router