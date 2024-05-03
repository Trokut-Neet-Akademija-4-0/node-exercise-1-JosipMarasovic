import {IBlog} from '../models/interfaces/blogInterface'
import blogData from '../models/blogModel'
import HttpError from '../utils/HttpError'
import  Blog  from '../entities/Blog'


class BlogService {
    private blogData : IBlog[] = blogData

    async getAllBlogData() : Promise<Blog []> {
        return await Blog.find()
    }

    async getBlogById(id: number): Promise<IBlog | undefined> {
        return await Blog.findOne(id);
    }

  /*  getBlogById(id: number): IBlog  {
        const foundBlog = this.blogData.find(blog => blog.id === id);
        if (!foundBlog) {
            throw new HttpError(404, `Blog with id ${id} not found`);
        }
        return foundBlog;
    }

    createBlog(newBlogData: IBlog): IBlog {
        const lastId = this.blogData.length > 0 ? this.blogData[this.blogData.length - 1].id : 0;
        const newId = lastId + 1;
    
        const newBlog: IBlog = { ...newBlogData, id: newId };
        this.blogData.push(newBlog);
        return newBlog;
    }
    
    updateBlog(id: number, updatedBlogData: IBlog): IBlog  {
        const index = this.blogData.findIndex(blog => blog.id === id);
        if (index !== -1) {
            const updatedBlog = { ...this.blogData[index], ...updatedBlogData };
            this.blogData[index] = updatedBlog;
            return updatedBlog;
        }
        throw new HttpError(404, `Blog with id ${id} not found`);
    }

    deleteBlog(id: number): IBlog  {
        const index = this.blogData.findIndex(blog => blog.id === id);
        if (index !== -1) {
            const deletedBlog = this.blogData.splice(index, 1)[0];
            return deletedBlog;
        }
        throw new HttpError(404, `Blog with id ${id} not found`); 
    }*/

}

export default new BlogService()