module.exports = app => {
    //local:LocalStrategy=>deserializeUser=>app.passport.doVerify=>app.passport.verify=>serializeUser=>deserializeUser
    //local:LocalStrategy=>deserializeUser=>done(null, user)=>serializeUser=>deserializeUser=>localAuthCallback()
    //local:LocalStrategy=>deserializeUser=>done(null, false)
    const LocalStrategy = require('passport-local').Strategy;
    // 挂载 strategy
    app.passport.use(new LocalStrategy({
        passReqToCallback: true,
    }, async (req, username, password, done) => {
        
        // format user
        // const user = {
        //     provider: 'local',
        //     username,
        //     password,
        // };
        // debug('%s %s get user: %j', req.method, req.url, user);
        // 官方写了doVerify，可能是因为官方分表了，这里没有用doVerify,直接done(null, user)
        // app.passport.doVerify(req, user, done);

        const user = await req.ctx.service.user.getUser({ username })
        // if (err) { return done(err); }
        if (!user) {
            const newUser = await req.ctx.service.user.addUser({ oauthName:'local', username, password })
            return done(null, newUser); 
        }
        if (user.password!=password) { return done(null, false); }
        return done(null, user);

    }));

    app.passport.verify(async (ctx, providerUser) => {
        
        //https://eggjs.org/zh-cn/tutorials/passport.html
        // 从数据库中查找用户信息
        //
        // Authorization Table
        // column   | desc
        // ---      | --
        // provider | provider name, like github, twitter, facebook, weibo and so on
        // uid      | provider unique id
        // user_id  | current application user id
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

        const newUser = await ctx.service.user.addUser({ oauthName, oauthId, username: providerUser.name, avatar: providerUser.photo })
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