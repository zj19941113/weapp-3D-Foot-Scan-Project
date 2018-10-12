var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Message:{},
    beg:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')
    var that = this
    that.setData({
      userInfo: app.globalData.userInfo,
      Message: app.globalData.Message
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

  remove: function (event) {
    var that = this
    console.log(event.currentTarget.dataset.hi)
    var hi = event.currentTarget.dataset.hi
    wx.showActionSheet({
      itemList: ['删除'],
      success: function (res) {
        console.log(res.tapIndex)

        if (res.tapIndex === 0) {
          // 删除
          wx.showLoading({
            title: '努力删除中',
          })
          wx.request({
            url: app.globalData.urlHeader + '/message/remove',
            data: {
              openid: app.globalData.openid,
              token: app.globalData.token,
              messageid: hi
            },
            method: 'POST',
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              wx.hideLoading()
              if (res.data.code === 0) {
                console.log('删除成功')
                var index = -1

                for (let i = 0; i < that.data.Message.length; i++) {
                  if (that.data.Message[i].messageid === hi) {
                    index = i
                    break
                  }
                }
                if (index !== -1) {
                  that.data.Message.splice(index, 1)
                  app.globalData.Message = that.data.Message,
                  that.setData({
                    Message: that.data.Message
                  })
                }
                

                console.log(index)
              } else {
                console.log(res.data.error)
              }
            }
          }) 
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
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

  onPullDownRefresh: function (e) {
    var that = this 
    // 获取最新信息
    wx.request({
      url: app.globalData.urlHeader + '/message/personal',
      data: {
        openid: app.globalData.openid,
        token: app.globalData.token,
        beg: 0,
        num: 10
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.code === 0) {
          app.globalData.Message = res.data.data.message,
            that.setData({
              Message: res.data.data.message,
            })
          console.log(that.data.Message)
          wx.stopPullDownRefresh()
        }
        else {
          console.log('获取列表失败！' + res.data.error)
          wx.stopPullDownRefresh()
        }
      }
    })
  },

  //加载更多
  onReachBottom: function (e){
    var that = this
    that.setData({
      beg: that.data.beg + 10,
    });
    wx.request({
      url: app.globalData.urlHeader + '/message/personal',
      data: {
        openid: app.globalData.openid,
        token: app.globalData.token,
        beg: that.data.beg,
        num: 10
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.code === 0) {
          for (let i = 0; i < res.data.data.message.length; i++) {
            that.data.Message.push(res.data.data.message[i])
          }
          app.globalData.Message = that.data.Message,
            that.setData({
            Message: that.data.Message,
              
            })

          console.log(that.data.Message)
        }
        else {
          console.log('获取列表失败！' + res.data.error)
        }
      }
    })

  }


})