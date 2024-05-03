import {IBlog} from '../models/interfaces/blogInterface'
import blogData from '../models/blogModel'
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
            throw new HttpError(404,`Product with id ${id} not found`)
            return foundBlog   
    }


    async deleteBlogById(id:number) :Promise<Blog> {
        const blog = await this.getBlogById(id)
        return blog.remove()
    }

    async updateBlog(blog_id :number,existingBlog :Blog ) :Promise <Blog>{
        const blog = await this.getBlogById(blog_id)
        blog.updateExistingProduct(existingBlog)
        return blog.save()
    }
    
    
}

export default new BlogService()