const router = require('koa-router')()

router.prefix('/api')

// api-获取评论列表
router.get('/list', async (ctx, next) => {
  ctx.body = {
    error: 0,
    data: [{
      user: 'felix',
      message: 'The weather is good today!',
      createAt: new Date().toLocaleString()
    }, {
      user: 'lady',
      message: 'It is pretty!',
      createAt: new Date().toLocaleString()
    }]
  }
})
// api-创建评论
router.post('/create', function (ctx, next) {
  req_body = ctx.request.body
  console.log(req_body)
  ctx.body = {
    error: 0,
    data: {
      user: 'felix',
      message: 'The weather is good today!',
      createAt: new Date().toLocaleString()
    }
  }
})

module.exports = router