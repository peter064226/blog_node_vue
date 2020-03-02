// app/controller/types.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class TypeController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.service.type.getTypes(query);
  }
  
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.type.getType(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { typename, password } = ctx.request.body;
    const type = await ctx.service.type.addType({ typename, password });
    ctx.status = 201;
    ctx.body = type;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const type = await ctx.service.type.udpateType(id);
    if (!type) {
      ctx.status = 404;
      return;
    }

    const { typename, password } = ctx.request.body;
    await type.update({ typename, password });
    ctx.body = type;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const type = await ctx.service.type.removeType(id);
    if (!type) {
      ctx.status = 404;
      return;
    }
    await type.destroy();
    ctx.status = 200;
  }
}

module.exports = TypeController;