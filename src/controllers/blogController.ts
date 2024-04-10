import { Request, Response } from 'express'
import blogService from '../services/blogService'
import { IBlog } from '../models/interfaces/blogInterface'


const getAllBlogData =  (req: Request, res: Response) => {
    res.send(blogService.getAllBlogData())
}

const getBlogById =  (req: Request, res: Response) => {
    const blogId = parseInt(req.params.id);
    const blog = blogService.getBlogById(blogId);
    if (blog) {
        res.send(blog);
    } else {
        res.status(404).send('Blog not found');
    }

}

const createBlog =  (req: Request, res: Response) => {
    const newBlogData = req.body as IBlog;
    const createdBlog = blogService.createBlog(newBlogData);
    res.status(201).send(createdBlog);

}

const updateBlog = (req: Request, res: Response) => {
    const blogId = parseInt(req.params.id);
    const updatedBlogData = req.body as IBlog;
    const updatedBlog = blogService.updateBlog(blogId, updatedBlogData);
    if (updatedBlog) {
        res.send(updatedBlog);
    } else {
        res.status(404).send('Blog not found');
    }

}

const deleteBlog =  (req: Request, res: Response) => {
    const blogId = parseInt(req.params.id);
    const deletedBlog = blogService.deleteBlog(blogId);
    if (deletedBlog) {
        res.send('Blog deleted successfully');
    } else {
        res.status(404).send('Blog not found');
    }

}

export {getAllBlogData,getBlogById,createBlog,updateBlog,deleteBlog}