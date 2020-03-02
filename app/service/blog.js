const Service = require('egg').Service

class BlogService extends Service {
    async getBlogs(query){
        const blogs = await this.ctx.model.Blog.findAll(query)
        return blogs
    }
    async getBlog(id){
        return await this.ctx.model.Blog.findByPk(parseInt(id));
    }
    async addBlog(blog){
        const blog = await ctx.model.Blog.create(blog);
        return blog
    }
    async removeBlog(id){
        const blog = await ctx.model.Blog.findByPk(id);
        if (!blog) {
            return;
        }
        await blog.destroy();
    }
    async updateBlog(){
        const ctx = this.ctx;
        const id = parseInt(ctx.params.id);
        const blog = await ctx.model.Blog.findByPk(id);
        if (!blog) {return;}
        const { name } = ctx.request.body;
        await blog.update({ name });
    }
}

module.exports = BlogService;