import express, { Request, Response } from 'express'
import { getBlogById,getAllBlogs } from '../controllers/blogController';

const router = express.Router()


router.get('/', getAllBlogs)
router.get('/:id',getBlogById )
  

 

export default router