import express, { Request, Response } from 'express'
import blogService from '../services/blogService'
import {IBlog} from '../models/interfaces/blogInterface';

const router = express.Router()



router.get('/',(req :Request,res :Response) => {

    const allBlogData = blogService.getAllBlogData()
    res.send(allBlogData)
});

router.get('/:id', (req: Request, res: Response) => {
    const blogId = parseInt(req.params.id);
    const blog = blogService.getBlogById(blogId);
    if (blog) {
        res.send(blog);
    } else {
        res.status(404).send('Blog not found');
    }
});

router.post('/', (req: Request, res: Response) => {
    const newBlogData = req.body as IBlog;
    const createdBlog = blogService.createBlog(newBlogData);
    res.status(201).send(createdBlog);
});

router.put('/:id', (req: Request, res: Response) => {
    const blogId = parseInt(req.params.id);
    const updatedBlogData = req.body as IBlog;
    const updatedBlog = blogService.updateBlog(blogId, updatedBlogData);
    if (updatedBlog) {
        res.send(updatedBlog);
    } else {
        res.status(404).send('Blog not found');
    }
});




router.delete('/:id', (req: Request, res: Response) => {
    const blogId = parseInt(req.params.id);
    const deletedBlog = blogService.deleteBlog(blogId);
    if (deletedBlog) {
        res.send('Blog deleted successfully');
    } else {
        res.status(404).send('Blog not found');
    }
});



export default router