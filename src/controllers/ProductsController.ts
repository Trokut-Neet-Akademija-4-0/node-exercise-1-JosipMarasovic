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
        res.json(product);
    } catch (error) {
        next(error);
    }
};

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

/*const getAllProducts = async (req: Request, res: Response) => {
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


const getPopularProductsByCategoryId = async (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.categoryId,10)

    res.send(await productsService.getPopularProductsByCategoryId(categoryId))
}*/

export{
    getAllProducts,
    getProductById,
    getPopularProducts,
    getCategoryProductsById,
    getPopularProductsByCategoryId
  
}