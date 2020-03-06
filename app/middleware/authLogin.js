module.exports = options =>{
    return async function authLogin(ctx,next){
        if(ctx.user || ctx.method=="GET"){
            await next()
        }else{
            throw new Error('请登陆后重试')
        }
    }
}