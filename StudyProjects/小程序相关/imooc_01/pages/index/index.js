// index.js
// 获取应用实例
// const app = getApp()

Page({
  data: {
    showIcon: true,
    "swiperList": [
      {
        "imgUrl": "https://imooc-micro-app.oss-cn-beijing.aliyuncs.com/TS.jpeg"
      },
      {
        "imgUrl": "https://imooc-micro-app.oss-cn-beijing.aliyuncs.com/css.jpeg"
      },
      {
        "imgUrl": "https://imooc-micro-app.oss-cn-beijing.aliyuncs.com/framework.jpeg"
      }
    ]
  },
  // headerinput框输入的时候触发的事件（将输入框中的icon隐藏）
  handleInputChange(event) {
    let inputVal = event.detail.value;
    this.setData({
      showIcon: inputVal ? false : true
    })
  }
})