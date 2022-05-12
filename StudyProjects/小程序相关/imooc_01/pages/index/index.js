// index.js
Page({
  data: {
    showIcon: true,
    "swiperList": [],
    "courses": [],
    "searchList": null,
    "type": "recommend",
    "tabs": [{
        type: "recommend",
        name: "推荐"
      },
      {
        type: "path",
        name: "路径"
      },
      {
        type: "project",
        name: "实战"
      },
      {
        type: "activity",
        name: "活动"
      }
    ]
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
  },
  // 切换导航选项时，文字下面显示横条
  handleNavigatorChange(e) {
    const {
      currentTarget: {
        dataset: {
          type
        }
      }
    } = e
    this.setData({
      type
    })
  }
})