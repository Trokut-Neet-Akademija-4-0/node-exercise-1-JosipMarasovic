import express, { Request, Response } from 'express';
import getAboutContent from '../controllers/aboutController';

const router = express.Router();

router.get('/',getAboutContent)
 


export default router