import { Request, Response } from 'express'
import aboutService from '../services/aboutService'


const getAboutContent = (req: Request, res: Response) => {
    res.send(
        aboutService.getAboutContent()
    )
}

export default getAboutContent