import express, { Request, Response } from 'express'
import { getBlogById,updateBlog,deleteBlogById } from '../controllers/blogController';

const router = express.Router()


router.get('/:id',getBlogById )
  
router.put('/:id', updateBlog)
  
router.delete('/:id',deleteBlogById )
 

export default router