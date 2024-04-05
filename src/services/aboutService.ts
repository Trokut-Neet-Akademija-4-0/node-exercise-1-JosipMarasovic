import About from "../models/interfaces/aboutInterface";
import aboutContent from "../models/aboutModel";

  class  AboutService {
    private aboutContent :  About = aboutContent

    getAboutContent() : About {
        return this.aboutContent
    }
  }

  export default  new AboutService()
