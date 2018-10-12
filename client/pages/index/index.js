//index.js
var app = getApp();
// var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
      logined: true,
      head:'',
      Message: {},
      year:'',
      month:'',
      day:''
    },

  bindGetUserInfo: function (e) {
    var that = this
    console.log(e.detail.userInfo)
    app.globalData.userInfo = e.detail.userInfo
    if (typeof (app.globalData.userInfo) == 'undefined') {
      wx.showModal({
        title: '提示',
        content: '允许授权后才能正常使用小程序',
        showCancel: false,
        confirmText: '确定',
        success: function (res) {
          if (res.confirm) {
          } else if (res.cancel) {
          }
        }
      })
      return
    }
    wx.showTabBar({
      animation: true
    })
    that.setData({
      logined: true
    })
  },


  onLoad: function (options) {
    wx.showLoading({
      title: '努力加载中',
      mask: true
    })
    var that = this
    try {
      var openid = wx.getStorageSync('openid')
      var token = wx.getStorageSync('token')
    } catch (e) {
      console.log(e)
    }
    console.log(openid, token)

    // //屏幕高度
    // var sysInfo = wx.getSystemInfoSync()
    // that.setData({
    //   windowHeight: sysInfo.windowHeight,
    // })
    // 查看是否wx授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              app.globalData.userInfo = res.userInfo
              that.setData({
                logined: true
              })
            }
          })
        } else {
          wx.hideLoading()
          console.log('not login')
          wx.hideTabBar({
            animation: true
          })
          that.setData({
            logined: false
          })
        }
      }
    })

    wx.login({
      success: function (res) {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          console.log('code get'),
            console.log(res.code),
            //发起网络请求
            wx.request({
              url: `${app.globalData.urlHeader}/login`,
              data: {
                code: res.code,
                openid: '',
                token: ''
              },
              header: {
                'content-type': 'application/json'
              },
              method: 'POST',
              success: function (res) {
                if (res.data.code === 0) {
                  app.globalData.openid = res.data.data.openid
                  app.globalData.token = res.data.data.token
                  console.log(app.globalData)
                  try {
                    wx.setStorageSync('openid', res.data.data.openid)
                    wx.setStorageSync('token', res.data.data.token)
                  } catch (e) {
                    console.log(e)
                  }
                  wx.hideLoading()
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
                          year: res.data.data.message[0].time.substr(0, 4),
                          month: res.data.data.message[0].time.substr(5, 1) == 0 ? res.data.data.message[0].time.substr(6, 1) : res.data.data.message[0].time.substr(5, 2),
                          day: res.data.data.message[0].time.substr(8, 1) == 0 ? res.data.data.message[0].time.substr(9, 1) : res.data.data.message[0].time.substr(8, 2)
                        })
                        console.log(that.data.Message)
                        wx.hideLoading()
                      }
                      else {
                        console.log('获取列表失败！' + res.data.error)
                        wx.hideLoading()
                      }
                    }
                  })

                }
                else {
                  console.log('登录失败！' + res.data.error)
                  wx.hideLoading()
                }
              }

            })
        } else {
          console.log('登录失败！' + res.errMsg)
          wx.hideLoading()
        }
      }
    })
    
  },
  tohistory: function () {
    wx.navigateTo({
      url: '../history/history'
    })
  },

  totestupload: function() {
    wx.navigateTo({
      url: '../testupload/testupload'
    })
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
              year: res.data.data.message[0].time.substr(0, 4),
              month: res.data.data.message[0].time.substr(5, 1) == 0 ? res.data.data.message[0].time.substr(6, 1) : res.data.data.message[0].time.substr(5, 2),
              day: res.data.data.message[0].time.substr(8, 1) == 0 ? res.data.data.message[0].time.substr(9, 1) : res.data.data.message[0].time.substr(8, 2)
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
  
})
