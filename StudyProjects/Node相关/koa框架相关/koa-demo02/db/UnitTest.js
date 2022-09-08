// 测试

const { User } = require('./model')

!(async () => {
  // 新增数据
  const user_data = new User({
    username: 'ben',
    // password: '123456',
    age: 25,
    city: 'suzhou',
    email: '1956552535@qq.com',
    // gender: 1
  })
  user_data.save()
})()