'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,middleware } = app

  // app.passport.mount('github')
  const github = app.passport.authenticate('github', {})
  //转到第三方登陆页面
  router.get('/api/github/login', github)
  //鉴权成功后的回调页面,passport内部会将code传给github获取用户信息，然后进入app.js中的app.passport.verify进行保存user到数据库操作
  router.get('/api/github/callback', github)
  
  // 渲染登录页面，用户输入账号密码(原第三方提供,因为egg不做页面，所以需要前端做)
  // router.get('/login', controller.home.login);
  // 登录校验(原第三方提供)，会进入passport.authenticate
  router.post('/api/local/login', app.passport.authenticate('local', { successRedirect: '/api/local/callback' }));
  // 鉴权成功后的回调页面,也就是上一行的参数 successRedirect ，此处egg是接口不自带页面，所以省去
  router.get('/api/local/callback', controller.user.localAuthCallback);

  router.get('/', controller.home.index)
  router.resources('users', '/api/users',middleware.authLogin(), controller.user)
  router.get('/api/getCurrentUser',controller.user.getCurrentUser)
  router.get('/api/logout',controller.user.logout)
  router.resources('types', '/api/types', controller.type)
  router.resources('blogs', '/api/blogs', middleware.authLogin(),controller.blog)
  router.resources('comments', '/api/comments', middleware.authLogin(),controller.comment)
  router.post('/api/admin/login',controller.admin.login)
}
