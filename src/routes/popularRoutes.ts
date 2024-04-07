import express, { Request, Response } from 'express'
import popularService from '../services/popularService'

const router = express.Router()

router.get('/',(req :Request,res :Response) => {

    const popularProducts = popularService.getPopularProducts()
    res.send(popularProducts)
});

router.get('/:id', (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    const product = popularService.getProductById(productId);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send('Product not found');
    }
});


router.post('/',(req:Request,res:Response) => {
    const newProduct = req.body;
    const createdPRoduct = popularService.createProduct(newProduct)
    res.status(201).send(createdPRoduct)
})

router.put('/:id', (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    const updateProductData = req.body;
    const updateProduct = popularService.updateProduct(productId, updateProductData);
    if (updateProduct) {
        res.send(updateProduct);
    } else {
        res.status(404).send('Product not found');
    }
});


router.delete('/:id', (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    const deletedProduct = popularService.deleteProduct(productId);
    if (deletedProduct) {
        res.send('Product deleted ');
    } else {
        res.status(404).send('Product not found');
    }
});





export default router