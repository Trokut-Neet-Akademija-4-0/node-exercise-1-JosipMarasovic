
import HttpError from '../utils/HttpError'
import  Blog  from '../entities/Blog'


class BlogService {
    
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


    async deleteBlogById(id:number) :Promise<Blog> {
        const blog = await this.getBlogById(id)
        return blog.remove()
    }

    async getBlogPictureById() : Promise<Blog>{


        return new Blog
    }


    async deleteBlogPictureById() : Promise<Blog>{
      

        return new Blog
    }

   
    
    
}

export default new BlogService()