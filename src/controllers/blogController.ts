import { Request, Response } from 'express'
import blogService from '../services/blogService'





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

const getBlogPictureById = async( req :Request,res : Response) => {

}

const deleteBlogPictureById = async( req :Request,res : Response) => {
    
}







export {
    getBlogById,
    deleteBlogById,
    getBlogPictureById
   
}