const router = require('koa-router')()
const { Comment } = require('../db/model')

const loginCheck = require('../middlewares/loginCheck')

router.prefix('/api')

// api-获取评论列表
router.get('/list', loginCheck, async (ctx, next) => {
  // 获取所有 comment 数据
  const commentAllList = await Comment.find().sort({ _id: -1 })
  ctx.body = {
    error: 0,
    data: commentAllList
  }
})
// api-创建评论
router.post('/create', async function (ctx, next) {
  req_body = ctx.request.body
  // 获取请求过来的数据中的username、content
  const { content, username } = req_body
  // 创建 comment
  const addResult = await Comment.create({
    username,
    content
  })

  ctx.body = {
    error: 0,
    data: addResult
  }
})

module.exports = router