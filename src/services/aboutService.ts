
import  About  from "../entities/About";
import HttpError from "../utils/HttpError";

class AboutService {
    async getAboutContent(): Promise<About> {
        const aboutEntry = await About.find();
        if (!aboutEntry) {
           
            throw  new HttpError(404,`Content not found`)
        }
        return aboutEntry[0];
    }
}

export default new AboutService();
