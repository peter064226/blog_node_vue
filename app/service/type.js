const Service = require('egg').Service

class TypeService extends Service {
    async getTypes(){
        const query = { limit: parseInt(ctx.query.limit), offset: parseInt(ctx.query.offset) }
        const types = await ctx.model.Type.findAll(query)
        return types
    }
    async getType(){
        return await ctx.model.Type.findByPk(parseInt(this.ctx.params.id));
    }
    async addType(){
        const ctx = this.ctx;
        const { name } = ctx.request.body;
        const type = await ctx.model.Type.create({ name });
        return type
    }
    async removeType(){
        const ctx = this.ctx;
        const id = parseInt(ctx.params.id);
        const type = await ctx.model.Type.findByPk(id);
        if (!type) {
            return;
        }
        await type.destroy();
    }
    async updateType(){
        const ctx = this.ctx;
        const id = parseInt(ctx.params.id);
        const type = await ctx.model.Type.findByPk(id);
        if (!type) {return;}
        const { name } = ctx.request.body;
        await type.update({ name });
    }
}