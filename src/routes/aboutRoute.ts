import express, { Request, Response } from 'express';
import aboutService from '../services/aboutService';

const router = express.Router();

router.get('/',(req : Request,res : Response) => {
    const aboutContent = aboutService.getAboutContent();
    res.send(aboutContent)

})


export default router