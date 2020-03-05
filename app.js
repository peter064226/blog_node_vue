module.exports = app => {
    app.passport.verify(async (ctx, providerUser) => {
        // debugger
        //https://eggjs.org/zh-cn/tutorials/passport.html
        //egg官方有分表，项目比较简单，就没有分
        console.log('providerUser:' + providerUser)
        // assert(providerUser.provider, 'providerUser.provider should exists')
        // assert(providerUser.id, 'providerUser.id should exists')
        const oauthName = providerUser.provider
        const oauthId = providerUser.id
        const existsUser = await ctx.service.user.getUser({ oauthName, oauthId })
        if (existsUser) {
            return existsUser;
        }

        const newUser = await ctx.service.user.addUser({ oauthName, oauthId, username: providerUser.name ,avatar:providerUser.photo})
        return newUser
        // return 的user就是下面传入的那个User
    })

    // 将用户信息序列化后存进 session 里面，一般需要精简，只保存个别字段
    app.passport.serializeUser(async (ctx, user) => {
        console.log('serializeUser')
        return user;
    });

    // 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
    app.passport.deserializeUser(async (ctx, user) => {
        console.log('deserializeUser')
        return user;
    });

}