// pages/my/my.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')
    var that = this
    that.setData({
      userInfo: app.globalData.userInfo
    })
    this.netstart()

  },

  netstart: function () {
    var that = this
    console.log("正在查询网络状态")
    wx.getNetworkType({
      success: function (res) {
        console.log(res.networkType)
        if (res.networkType == "none") {
          that.setData({
            networkType: false
          })
        } else {
          that.setData({
            networkType: true
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },
  tolocatemarket: function () {
    wx.navigateTo({
      url: '../locatemarket/locatemarket'
    })
  },
  toomlinemarket: function () {
    wx.navigateTo({
      url: '../omlinemarket/omlinemarket'
    })
  },
})