// 登录验证 中间件
async function loginCheck (ctx, next) {
  const userInfo = ctx.session.userInfo
  if (userInfo && userInfo.username) {
    await next()
    return
  }
  ctx.body = {
    errno: -1,
    message: '请登录'
  }
}

module.exports = loginCheck