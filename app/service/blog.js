const Service = require('egg').Service

class BlogService extends Service {
    async getBlogs(query) {
        const blogs = await this.ctx.model.Blog.findAll({ where:query, attributes: ['id', 'title', 'intro','svg','typeId'] })
        return blogs
    }
    async getBlog(id) {
        return await this.ctx.model.Blog.findByPk(parseInt(id));
    }
    async addBlog(blog) {
        return await this.ctx.model.Blog.create(blog);
    }
    async removeBlog(id) {
        const blog = await this.ctx.model.Blog.findByPk(id,{
            include: [ this.ctx.model.User ]
        });
        // const user = await blog.getUser()
        if (!blog) {
            throw new Error('日志不存在')
        }
        if(this.ctx.user.id!=blog.user.id) throw new Error('不能删除非本人写的日志')
        const resBlog = blog.destroy()
        return await resBlog
    }
    async updateBlog(blogObj) {
        const ctx = this.ctx;
        const id = parseInt(ctx.params.id);
        const blog = await ctx.model.Blog.findByPk(id);
        if (!blog) { return; }
        // const { name } = ctx.request.body;
        await blog.update(blogObj);
    }
}

module.exports = BlogService;