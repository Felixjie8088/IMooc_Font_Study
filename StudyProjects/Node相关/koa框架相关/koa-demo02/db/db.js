// 连接数据库（mongodb 的服务器）
const mongoose = require('mongoose')
// mongodb 服务url
const url = 'mongodb://localhost:27017'
// 需要操作的数据库名称
const dbname = 'commentDemo'

// // 配置项 6.x版本以下需要
// mongoose.set('useCreateIndex', true)
// mongoose.set('useFindAndModify', true)

// 开始连接
mongoose.connect(`${url}/${dbname}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// 连接实例
const conn = mongoose.connection
// 监听错误
conn.on('error', err => {
  console.log('mongoose连接出错 ', err)
})

module.exports = mongoose