import { NextFunction, Request, Response } from 'express'
import productsService from '../services/productsService'
import Images from '../entities/Images';
import path from 'path';
import fs from 'fs';





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
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const imagesDirectory = path.join(__dirname, '../../images/products', product.productId.toString());
        console.log('Checking images in directory:', imagesDirectory);

        if (fs.existsSync(imagesDirectory)) {
            const imageFiles = fs.readdirSync(imagesDirectory);
            console.log('Found image files:', imageFiles);

            const baseURL = `${req.protocol}://${req.get('host')}/images/products/${product.productId}/`;
            console.log('Base URL for images:', baseURL);

            const updatedImages = imageFiles.map(fileName => {
                const image = new Images();
                image.imageId = fileName;
                image.imageUrl = `${baseURL}${fileName}`;
                return image;
            });

            product.images = updatedImages as Images[];
        } else {
            console.log('No images directory found for product:', product.productId);
        }

       
        const productWithoutCircularReference = JSON.parse(JSON.stringify(product, (key, value) => {
            if (key === 'product') {
                return undefined; 
            }
            return value;
        }));

        console.log('Product with updated images:', productWithoutCircularReference);

        res.json(productWithoutCircularReference);
    } catch (error) {
        next(error);
    }
};

 



const getCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await productsService.getCategories();
        return res.json(categories);
      } catch (error) {
        next(error);
      }

}

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
    getPopularProductsByCategoryId,
    getCategories
  
}