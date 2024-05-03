
import  About  from "../entities/About";
import HttpError from "../utils/HttpError";

class AboutService {
    async getAboutContent(): Promise<About> {
        const aboutEntry = await About.findOne({});
        if (!aboutEntry) {
            // Handle the case where no entry is found
            throw new Error('No About entry found');
        }
        return aboutEntry;
    }
}

export default new AboutService();
