import { Request, Response } from 'express'
import productsService from '../services/productsService'




const getAllProducts = async (req: Request, res: Response) => {
    res.send(await productsService.getAllProducts())
}

const getProductById = async  (req: Request, res: Response) => {
    const productId = parseInt(req.params.id, 10); 
    res.send(await productsService.getProductById(productId));
}


const getCategoryProductsByName = async (req: Request, res: Response) => {
    const categoryName = req.params.categoryName;
    res.send(await productsService.getProductsByCategoryName(categoryName))
}

const getPopularProducts = async (req: Request, res: Response) =>{
    res.send(await productsService.getPopularProducts())
}

export{
    getAllProducts,
    getProductById,
    getCategoryProductsByName,
    getPopularProducts
  
}