// app/controller/blogs.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class BlogController extends Controller {
  async index() {
    
    // const query = { limit: toInt(this.ctx.query.limit), offset: toInt(this.ctx.query.offset) };
    
    this.ctx.body = await this.ctx.service.blog.getBlogs(this.ctx.query);
  }
  
  async show() {
    this.ctx.body = await this.ctx.service.blog.getBlog(toInt(this.ctx.params.id));
  }

  async create() {
    this.ctx.validate({
      title: { type: 'string' },
      intro: { type: 'string' },
      content: { type: 'string' },
    });
    const blog = await this.ctx.service.blog.addBlog({...this.ctx.request.body,userId:this.ctx.user.id});
    this.ctx.status = 201;
    this.ctx.body = {success:true,msg:'增加成功'};
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const blog = await ctx.model.Blog.findByPk(id);
    if (!blog) {
      ctx.status = 404;
      return;
    }
    await blog.update(ctx.request.body);
    ctx.body = blog;
  }

  async destroy() {
    const ctx = this.ctx;
    const blog = await ctx.service.blog.removeBlog(ctx.params.id);
    if (blog){
      ctx.body={success:true}
    }
  }
}

module.exports = BlogController;