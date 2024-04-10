import express, { Request, Response } from 'express'
import { getAllBlogData,getBlogById,updateBlog,deleteBlog,createBlog } from '../controllers/blogController';

const router = express.Router()

router.get('/',getAllBlogData)

router.get('/:id',getBlogById )
  
router.post('/', createBlog)
  
router.put('/:id', updateBlog)
  
router.delete('/:id',deleteBlog )
 

export default router