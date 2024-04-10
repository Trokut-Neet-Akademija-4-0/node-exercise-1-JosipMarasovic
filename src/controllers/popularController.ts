import { Request, Response } from 'express'
import popularService from '../services/popularService'




const getPopularProducts =  (req: Request, res: Response) => {
    const popularProducts = popularService.getPopularProducts()
    res.send(popularProducts)
}

const getProductById =  (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    const product = popularService.getProductById(productId);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send('Product not found');
    }

}

const createProduct =  (req: Request, res: Response) => {
    const newProduct = req.body;
    const createdPRoduct = popularService.createProduct(newProduct)
    res.status(201).send(createdPRoduct)

}

const updateProduct   =  (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    const updateProductData = req.body;
    const updateProduct = popularService.updateProduct(productId, updateProductData);
    if (updateProduct) {
        res.send(updateProduct);
    } else {
        res.status(404).send('Product not found');
    }

}

const deleteProduct  =  (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    const deletedProduct = popularService.deleteProduct(productId);
    if (deletedProduct) {
        res.send('Product deleted ');
    } else {
        res.status(404).send('Product not found');
    }

}

export {getPopularProducts,getProductById,updateProduct,deleteProduct,createProduct}