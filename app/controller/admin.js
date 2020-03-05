const Controller = require('egg').Controller

class AdminController extends Controller {
    async login() {
        this.ctx.validate({
            username: { type: 'string' },
            password: { type: 'string' },
        });
        const { username, password } = this.ctx.request.body
        const user = await this.ctx.service.user.getUser({ username, password,isAdmin:true })
        if (user) {
            this.ctx.body = { success: true, msg: '登录成功' }
        } else {
            this.ctx.body = { success: false, msg: '登录失败' }
        }
    }
}
module.exports = AdminController