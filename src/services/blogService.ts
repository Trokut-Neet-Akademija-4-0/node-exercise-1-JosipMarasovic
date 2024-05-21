
import HttpError from '../utils/HttpError'
import  Blog  from '../entities/Blog'

class BlogService {

  
    async getAllBlogs(): Promise<Blog[]> {
        try {
          const blogs = await Blog.find();
          return blogs;
        } catch (error) {
          throw new HttpError(500, 'Internal Server Error');
        }

    }
    
    async getBlogById(id: number): Promise<Blog> {
        const foundBlog = await Blog.findOne({
            where:{
                blogId : id
            }
        })
        if(!foundBlog)
            throw new HttpError(404,`Blog with id ${id} not found`)
            return foundBlog   
    }

}

export default new BlogService() 