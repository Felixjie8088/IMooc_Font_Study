// 测试

const { User } = require('./model')

!(async () => {
  // // 新增数据方式一
  // const user_data = new User({
  //   username: 'ben',
  //   // password: '123456',
  //   age: 25,
  //   city: 'suzhou',
  //   email: '1956552535@qq.com',
  //   // gender: 1
  // })
  // user_data.save()
  // 新增数据方式二
  // const user_data = await User.create({
  //   username: 'linda',
  //   age: 20,
  //   city: 'beijing',
  //   email: 'test@126.com'
  // })
  // console.log(`user_data 创建完成 - ${user_data}`)

  // // 查询列表数据  返回数组  查询单条数据 返回对象
  // const userList = await User.find().sort({ _id: -1 })
  // console.log(`userList 查询结果 ${userList}`)

  // // 更新数据
  // const updateResult = await User.findOneAndUpdate(
  //   { username: 'ben' }, // 修改的条件
  //   { age: 27 }, // 修改的内容
  //   { new: true } // 返回更新后的数据
  // )
  // console.log(`更新后的数据是 ${updateResult}`)

  // 删除数据
  const removeResult = await User.remove(
    { username: 'ben' }, // 删除的条件
  )
  console.log(`删除后返回的结果 ${removeResult}`)
})()