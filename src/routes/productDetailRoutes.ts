import express, { Request, Response } from 'express'
import productDetailServices from '../services/productDetailServices'



const router = express.Router()

router.get('/',(req :Request,res :Response) => {

    const popularProducts = productDetailServices.getAllProducts()
    res.send(popularProducts)
})

router.get('/:id', (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    const product = productDetailServices.getProductById(productId);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send('Product not found');
    }
});

export default router