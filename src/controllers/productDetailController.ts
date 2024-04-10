import { Request, Response } from 'express'
import productDetailServices from '../services/productDetailServices'

const getAllProducts =  (req: Request, res: Response) => {
    
    const popularProducts = productDetailServices.getAllProducts()
    res.send(popularProducts)
}

const getProductById =  (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    const product = productDetailServices.getProductById(productId);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send('Product not found');
    }

}

export {getAllProducts,getProductById}