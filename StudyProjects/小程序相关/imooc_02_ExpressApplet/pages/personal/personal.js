// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleMyRealNameTap(){
    wx.navigateTo({
      url: '/pages/personal/myRealName',
    })
  }
})