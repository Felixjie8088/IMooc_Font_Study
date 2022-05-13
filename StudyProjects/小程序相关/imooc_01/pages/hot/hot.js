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
    currentList: [],
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
        _self.changeCurrentList(_self.data.type, _self.data.timeType)
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
    this.setData({
      type,
      timeType: 'week'
    })
    this.changeCurrentList(this.data.type, 'week')
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
    })
    this.changeCurrentList(this.data.type, this.data.timeType)
  },
  // 选项卡切换时的数据源
  //选项卡切换后默认显示周排行的数据
  changeCurrentList(type, timeType) {
    let currentList = [];
    if (type === 'projectRanking' && timeType === 'week') {
      currentList = this.data.projectWeek;
    } else if (type === 'projectRanking' && timeType === 'month') {
      currentList = this.data.projectMonth;
    } else if (type === 'pathRanking' && timeType === 'week') {
      currentList = this.data.pathWeek;
    } else if (type === 'pathRanking' && timeType === 'month') {
      currentList = this.data.pathMonth;
    } else {
      currentList = this.data.projectWeek;
    }

    this.setData({
      currentList
    })
  }
})