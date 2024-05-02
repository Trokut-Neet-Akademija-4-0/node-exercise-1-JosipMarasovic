import { Request, Response } from 'express'
import aboutService from '../services/aboutService'


const getAboutContent = async (req: Request, res: Response) => {
    res.send(
     await   aboutService.getAboutContent()
    )
}
export default getAboutContent