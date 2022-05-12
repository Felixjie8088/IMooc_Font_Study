// index.js
// 获取应用实例
// const app = getApp()
// 常量
const NAVIGATOR_ITEM_ACTIVE_CLASS_NAME = 'navigator-item-active',
  NAVIGATOR_ITEM_ACTIVE_RECOMMEND_CLASS_NAME = 'navigator-item-active-recommend',
  NAVIGATOR_ITEM_ACTIVE_PROJECT_CLASS_NAME = 'navigator-item-active-project',
  NAVIGATOR_ITEM_ACTIVE_PATH_CLASS_NAME = 'navigator-item-active-path',
  NAVIGATOR_ITEM_ACTIVE_ACTIVITY_CLASS_NAME = 'navigator-item-active-activity'


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
  },
  // 切换导航选项时，文字下面显示横条
  handleNavigatorChange(e) {
    const query = wx.createSelectorQuery()

    const query_nodes = query.selectAll('.navigator-item')

    query_nodes.fields({
      dataset: true,
      size: true,
      scrollOffset: true,
      properties: ['scrollX', 'scrollY'],
      computedStyle: ['margin', 'backgroundColor'],
      context: true,
    }, function (res) {
      res.dataset // 节点的dataset
      res.width // 节点的宽度
      res.height // 节点的高度
      res.scrollLeft // 节点的水平滚动位置
      res.scrollTop // 节点的竖直滚动位置
      res.scrollX // 节点 scroll-x 属性的当前值
      res.scrollY // 节点 scroll-y 属性的当前值
      // 此处返回指定要返回的样式名
      res.margin
      res.backgroundColor
      res.context // 节点对应的 Context 对象
      res.className
      res.classList
    })
    const {
      currentTarget: {
        dataset: {
          type
        }
      }
    } = e
    query.exec(res => {
      for (const item of res) {
        console.log(res[0])
        item.className = 'navigator-item'
        // if (type === "recommend") {
        //   item.classList.add(NAVIGATOR_ITEM_ACTIVE_RECOMMEND_CLASS_NAME)
        // } else if (type === "project") {
        //   item.classList.add(NAVIGATOR_ITEM_ACTIVE_PROJECT_CLASS_NAME)
        // } else if (type === "path") {
        //   item.classList.add(NAVIGATOR_ITEM_ACTIVE_PATH_CLASS_NAME)
        // } else if (type === "activity") {
        //   item.classList.add(NAVIGATOR_ITEM_ACTIVE_ACTIVITY_CLASS_NAME)
        // }
      }
    })


  }
})