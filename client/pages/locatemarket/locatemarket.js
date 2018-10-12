// 引入SDK核心类
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var map;
var app = getApp()
Page({

  data: {
    latitude:0,
    longitude:0,
    markers: []
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 实例化API核心类
    map = new QQMapWX({
      key: '5NVBZ-HMM32-5KQU4-CI5L3-QVXVJ-I4FVE'
    });
    var that = this
    wx.getLocation({
      type: 'gcj02', 
      success(res) {
        that.setData({
          latitude : res.latitude,
          longitude : res.longitude
        })
      }
    })
    // 获取本地商城信息
    wx.request({
      url: app.globalData.urlHeader + '/market',
      data: {
        openid: app.globalData.openid,
        token: app.globalData.token,
        locate: 1001 
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.code === 0) {
          var markers = res.data.data.message;
          for (let i = 0; i < markers.length; i++) {
            markers[i]['howlong'] = ''
            markers[i]['iconPath'] = '../../img/location.png'
            map.calculateDistance({
              to: [{
                latitude: markers[i].latitude,
                longitude: markers[i].longitude
              }],
              success: function (res) {
                if (res.status === 0) {
                  markers[i].howlong = res.result.elements[0].distance
                } else {
                  console.log('获取距离失败！')
                }
              }
            })
          }
          setTimeout(function () {
            markers.sort(function (a, b) {
              return a.howlong - b.howlong;
            });
            that.setData({
              markers: markers
            })
            console.log(that.data.markers);
          }, 2500);
        }
        else {
          console.log('获取城市列表失败！' + res.data.error)
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
  
  }
})