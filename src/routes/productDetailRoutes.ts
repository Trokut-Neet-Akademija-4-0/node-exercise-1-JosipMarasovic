import express, { Request, Response } from 'express'

import {getAllProducts,getProductById} from '../controllers/productDetailController'



const router = express.Router()

router.get('/',getAllProducts)


router.get('/:id', getProductById)
  

export default router