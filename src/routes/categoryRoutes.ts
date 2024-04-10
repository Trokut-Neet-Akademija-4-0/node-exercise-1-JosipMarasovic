import express, { Request, Response } from 'express'
import {getAllProductsFromSingleCategory,getCategoryItemById,createCategoryItem,updateCategoryItemById,deleteCategoryItemById} from '../controllers/categoryController'



const router = express.Router()


router.get('/:category', getAllProductsFromSingleCategory)
 

// Create a new category item
router.post('/', createCategoryItem)
 

router.get('/:id', getCategoryItemById)
  
router.put('/:id', updateCategoryItemById)
  
router.delete('/:id', deleteCategoryItemById)
  

export default router