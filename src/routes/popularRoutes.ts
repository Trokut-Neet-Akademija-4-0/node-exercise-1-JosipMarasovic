import express, { Request, Response } from 'express'
import popularService from '../services/popularService'

const router = express.Router()

router.get('/',(req :Request,res :Response) => {

    const popularProducts = popularService.getPopularProducts()
    res.send(popularProducts)
});


router.get('/:id',(req:Request,res : Response) => {
    const productId = req.params.id;
    const product = popularService.getProductById(productId)
    if(product) {
        res.send(product);
    }else{
        res.status(404).send('Product not found')
    }
})



export default router