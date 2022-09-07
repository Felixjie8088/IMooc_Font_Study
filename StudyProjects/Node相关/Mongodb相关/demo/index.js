// nodejs 连接 MongoDB

const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017' // 本地启动的 mongodb 服务
const dbname = 'commentDemo' // 数据库
// 建立连接-mongodb
MongoClient.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, (err, client) => {
  if (err) {
    console.log('mongodb 连接出错 ', err)
  }
  console.log('mongodb 连接成功')
  // 连接数据库
  const db = client.db(dbname) // 切换数据库
  // 切换到指定的集合 collection
  const userCollection = db.collection('sys_users')
  // 查询数据
  userCollection.find().sort().toArray((err, result) => {
    if (err) {
      console.log('查询数据出错 ', err)
      return
    }
    console.log('查询结果 ', result)
  })
  // // 新增数据
  // userCollection.insertOne({
  //   username: 'David',
  //   password: '123456',
  //   age: 30,
  //   city: 'HongKong'
  // }, (err, result) => {
  //   if (err) {
  //     console.log('插入数据出错 ', err)
  //     return
  //   }
  //   console.log('插入后的返回结果 ', result)
  // })

  // // 修改数据
  // userCollection.updateOne(
  //   { username: "ben" },  // 修改的条件
  //   { $set: { password: "admin" } }, // 修改的内容
  //   (err, result) => {
  //     if (err) {
  //       console.log('修改数据出错 ', err)
  //       return
  //     }
  //     console.log('修改之后的返回结果 ', result)
  //   })
  // 删除数据
  userCollection.deleteOne({
    username: "ben1"
  }, (err, result) => {
    if (err) {
      console.log('删除数据出错 ', err)
      return
    }
    console.log('删除之后的返回结果 ', result)
  })
  // 关闭连接
  // client.close()
})