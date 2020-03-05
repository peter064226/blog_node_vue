// app/controller/comments.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class CommentController extends Controller {
  async index() {
    const query = { blogId:this.ctx.query.blogId };
    this.ctx.body = await this.ctx.service.comment.getComments(query);
  }
  
  async show() {
    this.ctx.body = await this.ctx.service.comment.getComment(toInt(this.ctx.params.id));
  }

  async create() {
    this.ctx.validate({
      content: { type: 'string' },
      blogId:{ type: 'string' },
    });
    const comment = await this.ctx.service.comment.addComment({userId:this.ctx.user.id,...this.ctx.request.body});
    this.ctx.status = 201;
    this.ctx.body = {success:true,msg:'增加成功'};
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const comment = await ctx.model.Comment.findByPk(id);
    if (!comment) {
      ctx.status = 404;
      return;
    }

    const { commentname, password } = ctx.request.body;
    await comment.update({ commentname, password });
    ctx.body = comment;
  }

  async destroy() {
    const ctx = this.ctx;
    const comment = await ctx.service.comment.removeComment(ctx.params.id);
    if (comment){
      ctx.body={success:true}
    }
  }
}

module.exports = CommentController;