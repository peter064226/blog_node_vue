const Service = require('egg').Service

class UserService extends Service{
    async getUser(option){
        const user = await this.ctx.model.User.findOne({where:option})
        return user
    }
    async addUser(user){
        return await this.ctx.model.User.create(user);
    }
}

module.exports = UserService;