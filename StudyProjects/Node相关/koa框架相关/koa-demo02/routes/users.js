const router = require('koa-router')()
const { User } = require('../db/model')

router.prefix('/users')  // 前缀

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/login', async (ctx, next) => {
  let resStr = 'login failed'
  const { username, password } = ctx.query // url 参数 queryString get 请求
  // const { username, password } = ctx.request.body // post 请求
  const user = await User.findOne({
    username,
    password
  })

  console.log(user)
  if (user) {
    // 模拟登录成功
    ctx.session.userInfo = user
    resStr = 'login ok'
  }

  ctx.body = {
    errno: resStr == 'login failes' ? -1 : 0,
    message: resStr
  }
})
module.exports = router
