import { Request, Response } from 'express'
import productsService from '../services/productsService'



const getAllProducts = async (req: Request, res: Response) => {
    res.send(await productsService.getAllProducts())
}

const getProductById = async  (req: Request, res: Response) => {
    const productId = parseInt(req.params.id, 10); 
    res.send(await productsService.getProductById(productId));
}

const getAllProductsFromCategory = async  (req: Request, res: Response) => {
    res.send(await productsService.getAllProductsFromCategory(req.params.category))
}


export{
    getAllProducts,
    getProductById,
    getAllProductsFromCategory
}