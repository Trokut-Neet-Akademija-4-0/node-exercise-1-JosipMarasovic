import { NextFunction, Request, Response } from 'express'
import productsService from '../services/productsService'





const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await productsService.getAllProducts();
        res.json(products);
    } catch (error) {
        next(error);
    }
};

const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productId = parseInt(req.params.id, 10);
        const product = await productsService.getProductById(productId);
        const baseURL = `${req.protocol}://${req.get('host')}/images/products/${product.productId}/`;
        const productResponse = {
            ...product,
            images: product.images.map(image => ({
                ...image,
                imageUrl: `${baseURL}${image.imageUrl}`
            }))
        };

        res.json(productResponse);
    } catch (error) {
        next(error);
    }
};

/*const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productId = parseInt(req.params.id, 10);
        const product = await productsService.getProductById(productId);
        
        res.json(product);
    } catch (error) {
        next(error);
    }
};*/

const getCategoryProductsById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categoryId = parseInt(req.params.categoryId, 10);
        const products = await productsService.getProductsByCategoryId(categoryId);
        res.json(products);
    } catch (error) {
        next(error);
    }
};

const getPopularProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await productsService.getPopularProducts();
        res.json(products);
    } catch (error) {
        next(error);
    }
};

const getPopularProductsByCategoryId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categoryId = parseInt(req.params.categoryId, 10);
        const products = await productsService.getPopularProductsByCategoryId(categoryId);
        res.json(products);
    } catch (error) {
        next(error);
    }
};



export{
    getAllProducts,
    getProductById,
    getPopularProducts,
    getCategoryProductsById,
    getPopularProductsByCategoryId
  
}