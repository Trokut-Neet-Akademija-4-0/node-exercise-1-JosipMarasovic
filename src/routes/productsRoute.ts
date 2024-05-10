import express, { Request, Response } from 'express'
import {getAllProducts,getProductById,getCategoryProductsByName} from '../controllers/productsController'


const router = express.Router()


router.get('/',getAllProducts)
router.get('/:id',getProductById)
router.get('/category/:categoryName',getCategoryProductsByName)





export default router