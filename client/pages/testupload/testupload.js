// pages/testupload/testupload.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageid:'',
    show: "",
    scanresult:'',
    selectstyle:0 ,//'-1'扫码上传数据，'1'填表上传数据
    Images:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  
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

  formSubmit: function (event) {
    var that = this
    var selectstyle = that.data.selectstyle
    if (selectstyle == 0) {
      wx.showToast({
        title: "请先选择数据添加方式",
        mask: true,
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    if (selectstyle == 1) {
      //'-1'扫码上传数据，'1'填表上传数据
      var data = event.detail.value;
      var footlength = data.var1;
      var footwidth = data.var2;
      var footheight = data.var3;
      var perimeter = data.var4;
      var zugong = data.var5;
      var muzhifandu = data.var6;
      var footlength2 = data.var7;
      var footwidth2 = data.var8;
      var footheight2 = data.var9;
      var perimeter2 = data.var10;
      var zugong2 = data.var11;
      var muzhifandu2 = data.var12;
      var openid = app.globalData.openid;
      var token = app.globalData.token;

      //调用接口保存数据，获取id
      wx.request({
        url: app.globalData.urlHeader + '/message/issue',
        data: {
          openid: openid,
          token: token,
          footlength: footlength,
          footwidth: footwidth,
          footheight: footheight,
          perimeter: perimeter,
          zugong: zugong,
          muzhifandu: muzhifandu,
          footlength2: footlength2,
          footwidth2: footwidth2,
          footheight2: footheight2,
          perimeter2: perimeter2,
          zugong2: zugong2,
          muzhifandu2: muzhifandu2,
        },
        method: 'POST',
        header: { 'content-type': 'application/json' },
        success: function (res) {
          console.log(res.data);
          if (res.data.code === 0) {
            that.setData({
              messageid: res.data.data.messageid
            })
              // 保存图片
              var Image = that.data.Images
              var imgs = that.data.imgs
              var messageid = that.data.messageid
              for (var i = 0; i < Image.length && i < 9; i++) {
                wx.uploadFile({
                  url: app.globalData.urlHeader + '/upload',
                  filePath: Image[i],
                  name: 'file',
                  formData: {
                    'messageid': messageid,
                    'openid': openid,
                    'token': token,
                    'type': 'img',
                    'no': i
                  },
                  success: function (res) {
                    console.log('img上传结果', res.data);
                  },
                })
              }
            wx.showToast({
              title: '发布成功',
              icon: 'success',
              duration: 2000
            });

          } else {
            wx.showToast({
              title: "发布失败",
              mask: true,
              duration: 1000
            })
          }
        },
      })
      
    }
    if (selectstyle == -1) {
      var scanresult = that.data.scanresult
      if (scanresult == '') {
        wx.showToast({
          title: "请先扫描分析结果二维码",
          mask: true,
          icon: 'none',
          duration: 1000
        })
        return false;
      }
      var footlength = scanresult.substr(14, 3);
      var footwidth = scanresult.substr(32, 2);
      var footheight = scanresult.substr(50, 2);
      var perimeter = scanresult.substr(67, 3);
      var zugong = scanresult.substr(82, 1);
      var muzhifandu = scanresult.substr(99, 1);
      var footlength2 = scanresult.substr(117, 3);
      var footwidth2 = scanresult.substr(136, 2);
      var footheight2 = scanresult.substr(155, 2);
      var perimeter2 = scanresult.substr(173, 3);
      var zugong2 = scanresult.substr(189, 1);
      var muzhifandu2 = scanresult.substr(207, 1);
      var openid = app.globalData.openid;
      var token = app.globalData.token;

      //调用接口保存数据，获取id
      wx.request({
        url: app.globalData.urlHeader + '/message/issue',
        data: {
          openid: openid,
          token: token,
          footlength: footlength,
          footwidth: footwidth,
          footheight: footheight,
          perimeter: perimeter,
          zugong: zugong,
          muzhifandu: muzhifandu,
          footlength2: footlength2,
          footwidth2: footwidth2,
          footheight2: footheight2,
          perimeter2: perimeter2,
          zugong2: zugong2,
          muzhifandu2: muzhifandu2,
        },
        method: 'POST',
        header: { 'content-type': 'application/json' },
        success: function (res) {
          console.log(res.data);
          if (res.data.code === 0) {
            that.setData({
              messageid: res.data.data.messageid
            })
                // 保存图片
                var Image = that.data.Images
                // var imgs = that.data.imgs
                var messageid = that.data.messageid
                for (var i = 0; i < Image.length && i < 9; i++) {
                  wx.uploadFile({
                    url: app.globalData.urlHeader + '/upload',
                    filePath: Image[i],
                    name: 'file',
                    formData: {
                      'messageid': messageid,
                      'openid': openid,
                      'token': token,
                      'type': 'img',
                      'no': i
                    },
                    success: function (res) {
                      console.log('img上传结果', res.data);
                    },
                  })
                }
          } else {
            wx.showToast({
              title: "发布失败",
              mask: true,
              duration: 1000
            })
          }
        },
      })
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 2000
      }) ;
      setTimeout(function () {
        wx.navigateTo({
          url: '../history/history'
        })
      }, 2000)
    } 
  },

  click: function () {
    var that = this;
    that.setData({
      selectstyle: -1
    })
    var show;
    wx.scanCode({
      success: (res) => {
        var resultStr = res.result.replace(/\ +/g, "");//去掉空格
        resultStr = resultStr.replace(/[ ]/g, "");    //去掉空格
        resultStr = resultStr.replace(/[\r\n]/g, "");//去掉回车换行
        this.show = "扫描结果:" + res.result 
        // +"二维码类型:" + res.scanType + "字符集:" + res.charSet + "路径:" + res.path;
        that.setData({
          show: this.show,
          scanresult: resultStr
        })
        wx.showToast({
          title: '二维码解码成功',
          icon: 'success',
          duration: 1000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '二维码解码失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {
      }
    })
  },

  submitnum: function () {
    var that = this;
    that.setData({
      selectstyle: 1
    })
  },

  previewImage: function (e) {
    var that = this
    var num = e.target.dataset.num
    var Images = that.data.Images
    var Image = Images
    wx.previewImage({
      current: Image[num],
      urls: Image
    })
  },

  addAttach: function (e) {
    var that = this
    wx.chooseImage({
      sizeType: ['compressed'],
      success: function (res) {
        var Images = that.data.Images
        for (var i = 0; i < res.tempFilePaths.length; i++) {
          Images.push(res.tempFilePaths[i])
        }
        that.setData({
          Images: Images
        })
      }
    })
  },

  clearImage: function (e) {
    var that = this
    var num = e.target.dataset.num
    var Images = that.data.Images
    var Image = Images
    Image.splice(num, 1)
    Images = Image
    that.setData({
      Images: Images
    })
  },

  // clearImage: function (e) {
  //   var that = this
  //   var num = e.target.dataset.num
  //   var Images = that.data.Images
  //   Images.splice(num, 1)
  //   that.setData({
  //     Images: Images
  //   })
  // },


})