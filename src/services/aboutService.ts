import { getRepository } from "typeorm";
import { About } from "../entities/About";
import HttpError from "../utils/HttpError";

class AboutService {
    async getAboutContent(): Promise<About | undefined> {
        try {
            const aboutRepository = getRepository(About);
            const aboutContent = await aboutRepository.findOne({}); // Provide an empty object as argument
            if (!aboutContent) {
                throw new HttpError(404, "About content not found");
            }
            return aboutContent;
        } catch (error) {
            console.error("Error fetching About content:", error);
            if (!(error instanceof HttpError)) {
                throw new HttpError(500, "Internal Server Error");
            }
            return undefined;
        }
    }
}

export default new AboutService();
