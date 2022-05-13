// pages/hot/hot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankTypes: [{
        title: "实战排行",
        type: "projectRanking"
      },
      {
        title: "路径排行",
        type: "pathRanking"
      }
    ],
    timeTypes: [{
        title: "周",
        name: "week"
      },
      {
        title: "月",
        name: "month"
      }
    ],
    type: "projectRanking",
    timeType: "week",
    typeWeekOrMonth: "projectRanking-week",
    projectWeek: [],
    projectMonth: [],
    pathWeek: [],
    pathMonth: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const _self = this
    wx.request({
      url: 'https://www.fastmock.site/mock/a6caaef4a9f224b80031c51d139a3976/weixin/api/getHotData',
      success(res) {
        const {
          data: {
            projectWeek,
            projectMonth,
            pathWeek,
            pathMonth
          }
        } = res.data
        _self.setData({
          projectWeek,
          projectMonth,
          pathWeek,
          pathMonth
        })
      }
    })
  },
  // tab选项卡点击，切换样式
  handleHotTabClick(e) {
    const {
      currentTarget: {
        dataset: {
          type
        }
      }
    } = e
    //选项卡切换后默认显示周排行的数据
    let timeType = 'week'
    this.setData({
      type,
      timeType,
      typeWeekOrMonth: type + '-' + timeType
    })
  },
  // time选项卡点击，切换样式
  handleHotTimeClick(e) {
    const {
      currentTarget: {
        dataset: {
          name
        }
      }
    } = e
    this.setData({
      timeType: name,
      typeWeekOrMonth: this.data.type + '-' + name
    })
  }
})