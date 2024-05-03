import { Request, Response } from 'express'
import blogService from '../services/blogService'
import { IBlog } from '../models/interfaces/blogInterface'
import Blog from '../entities/Blog'




const getBlogById =  async (req: Request, res: Response) => {
   res.send(
    await blogService.getBlogById(Number.parseInt(req.params.id))
   )
}

const deleteBlogById = async( req :Request,res : Response) => {
    res.send(
        await blogService.deleteBlogById(Number.parseInt(req.params.id))
    )
}

const updateBlog = async ( req :Request,res : Response) => {
    const blogId = Number.parseInt(req.params.id)
    const existingBlog = req.body as Blog
    res.send(await blogService.updateBlog(blogId,existingBlog))
}




export {
    getBlogById,
    deleteBlogById,
    updateBlog
}