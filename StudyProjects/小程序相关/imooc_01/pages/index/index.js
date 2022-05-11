// index.js
// 获取应用实例
// const app = getApp()

Page({
  data: {
    showIcon: true,
    "swiperList": [],
    "courses": [],
    "searchList": null
  },
  // 页面加载时获取需要的数据
  onLoad() {
    const _self = this;
    // 请求页面所需要的数据
    wx.request({
      url: 'https://www.fastmock.site/mock/a6caaef4a9f224b80031c51d139a3976/weixin/api/getData',
      success(res) {
        console.log(res)
        const {
          data,
          success
        } = res.data;
        _self.setData({
          swiperList: data.swiperList,
          courses: data.courses
        })
      }
    })
  },
  // headerinput框输入的时候触发的事件（将输入框中的icon隐藏）
  handleInputChange(event) {
    let inputVal = event.detail.value,
      searchList = null;
    if (inputVal) {
      searchList = this.data.courses.filter(item => item.title.indexOf(inputVal) >= 0)
    }
    this.setData({
      showIcon: inputVal ? false : true,
      searchList
    })
  }
})