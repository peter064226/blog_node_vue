// app/controller/blogs.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class BlogController extends Controller {
  async index() {
    const query = { limit: toInt(this.ctx.query.limit), offset: toInt(this.ctx.query.offset) };
    this.ctx.body = await this.ctx.service.blog.getBlogs(query);
  }
  
  async show() {
    this.ctx.body = await this.ctx.service.blog.getBlog(toInt(this.ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { blogname, password } = ctx.request.body;
    const blog = await ctx.service.blog.addBlog({ blogname, password });
    ctx.status = 201;
    ctx.body = blog;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const blog = await ctx.model.Blog.findByPk(id);
    if (!blog) {
      ctx.status = 404;
      return;
    }

    const { blogname, password } = ctx.request.body;
    await blog.update({ blogname, password });
    ctx.body = blog;
  }

  async destroy() {
    const ctx = this.ctx;
    const blog = await ctx.service.blog.removeBlog(ctx.params.id);
    if (!blog) {
      ctx.status = 404;
      return;
    }

    await blog.destroy();
    ctx.status = 200;
  }
}

module.exports = BlogController;