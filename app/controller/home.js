'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.session.fuck = 1
    ctx.redirect('/public/vue/index.html')
  }
}

module.exports = HomeController;
