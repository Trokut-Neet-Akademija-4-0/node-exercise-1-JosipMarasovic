import { Request, Response } from 'express'
import productsService from '../services/productsService'




const getAllProducts = async (req: Request, res: Response) => {
    res.send(await productsService.getAllProducts())
}

const getProductById = async  (req: Request, res: Response) => {
    const productId = parseInt(req.params.id, 10); 
    res.send(await productsService.getProductById(productId));
}

const getCategoryProductsById = async (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.categoryId, 10);
    res.send(await productsService.getProductsByCategoryId(categoryId));
}


const getPopularProducts = async (req: Request, res: Response) =>{
    res.send(await productsService.getPopularProducts())
}

export{
    getAllProducts,
    getProductById,
    getPopularProducts,
    getCategoryProductsById
  
}