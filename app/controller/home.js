'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.session.fuck = 1
    ctx.body = 'ctx.session';
  }
}

module.exports = HomeController;
