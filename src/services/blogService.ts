import {IBlog} from '../models/interfaces/blogInterface'
import blogData from '../models/blogModel'


class BlogService {
    private blogData : IBlog[] = blogData

    getAllBlogData() : IBlog [] {
        return this.blogData
    }

    getBlogById(id: number): IBlog | undefined {
        return this.blogData.find(blog => blog.id === id);
    }

    createBlog(newBlogData: IBlog): IBlog {
        const lastId = this.blogData.length > 0 ? this.blogData[this.blogData.length - 1].id : 0;
        const newId = lastId + 1;
    
        const newBlog: IBlog = { ...newBlogData, id: newId };
        this.blogData.push(newBlog);
        return newBlog;
    }
    

    updateBlog(id: number, updatedBlogData: IBlog): IBlog | undefined {
        const index = this.blogData.findIndex(blog => blog.id === id);
        if (index !== -1) {
            const updatedBlog = { ...this.blogData[index], ...updatedBlogData };
            this.blogData[index] = updatedBlog;
            return updatedBlog;
        }
        return undefined; 
    }

    deleteBlog(id: number): IBlog | undefined {
        const index = this.blogData.findIndex(blog => blog.id === id);
        if (index !== -1) {
            const deletedBlog = this.blogData.splice(index, 1)[0];
            return deletedBlog;
        }
        return undefined; 
    }


}

export default new BlogService()