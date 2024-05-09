import express, { Request, Response } from 'express'
import { getBlogById,deleteBlogById,getAllBlogs } from '../controllers/blogController';

const router = express.Router()


router.get('/', getAllBlogs)

router.get('/:id',getBlogById )
  
router.delete('/:id',deleteBlogById )
 

export default router