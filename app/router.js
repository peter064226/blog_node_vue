'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,middleware } = app

  // app.passport.mount('github')
  const github = app.passport.authenticate('github', {})
  router.get('/api/github', github)
  router.get('/api/github/callback', github)

  router.get('/', controller.home.index)
  router.resources('users', '/api/users',middleware.authLogin(), controller.user)
  router.get('/api/getCurrentUser',controller.user.getCurrentUser)
  router.get('/api/logout',controller.user.logout)
  router.resources('types', '/api/types', controller.type)
  router.resources('blogs', '/api/blogs', middleware.authLogin(),controller.blog)
  router.resources('comments', '/api/comments', middleware.authLogin(),controller.comment)
  router.post('/api/admin/login',controller.admin.login)
}
