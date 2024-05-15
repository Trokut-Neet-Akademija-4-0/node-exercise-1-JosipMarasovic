import { Request, Response } from 'express'
import blogService from '../services/blogService'



const getAllBlogs = async (req: Request, res: Response) => {
    res.send(
        await blogService.getAllBlogs()
    )
}


const getBlogById =  async (req: Request, res: Response) => {
   res.send(
    await blogService.getBlogById(Number.parseInt(req.params.id, 10))
   )
}

export {
    getBlogById,
    getAllBlogs
   
}