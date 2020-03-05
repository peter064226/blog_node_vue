const Service = require('egg').Service
const Sequelize  = require('sequelize' )
class CommentService extends Service {
    async getComments(query) {
        const comments = await this.ctx.model.Comment.findAll({ 
            limit: parseInt(this.ctx.query.limit) || 20, 
            offset: parseInt(this.ctx.query.offset) || 0, 
            where: query,
            include: [{
                model: this.ctx.model.User,
                attributes: ['username','avatar'],
                as: 'user',
                where: { id: Sequelize.col('comment.userId') }
            }]
         })
        return comments
    }
    async getComment(id) {
        return await this.ctx.model.Comment.findByPk(parseInt(id));
    }
    async addComment(comment) {
        return await this.ctx.model.Comment.create(comment);
    }
    async removeComment(id) {
        const comment = await this.ctx.model.Comment.findByPk(id);
        if (!comment) {
            return null;
        }
        const resComment = comment.destroy()
        return await resComment
    }
    async updateComment() {
        const ctx = this.ctx;
        const id = parseInt(ctx.params.id);
        const comment = await ctx.model.Comment.findByPk(id);
        if (!comment) { return; }
        const { name } = ctx.request.body;
        await comment.update({ name });
    }
}

module.exports = CommentService;