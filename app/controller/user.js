// app/controller/users.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.User.findAll(query);
    // ctx.session.bitch=2
    // ctx.body = ctx.session
  }

  async localAuthCallback(){
    //返回接口重定向不行,因为来源是一个ajax请求，无法重定向，只能发个消息让前端自己做重定向
    // this.ctx.redirect('/#/')
    this.ctx.body = {success:true}
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { username, password } = ctx.request.body;
    const user = await ctx.model.User.create({ username, password });
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { username, password } = ctx.request.body;
    await user.update({ username, password });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }

  async getCurrentUser() {
    this.ctx.body = this.ctx.user || {}
  }

  async logout(){
    this.ctx.logout()
    this.ctx.body = {success:true}
  }
}

module.exports = UserController;