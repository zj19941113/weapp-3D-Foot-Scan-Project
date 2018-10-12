// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    has_xiala:0,
    has_xiala_cn2: 0,
    has_xiala_eur: 0,
    has_xiala_us: 0,
    has_xiala_uk: 0,
    has_xiala_jp: 0,
    has_select: 0,
    cn:'',
    cn2: '',
    eur: '',
    us: '',
    uk: '',
    jp: '',
    sel11: 0,
    sel12: 0,
    sel13: 0,
    sel21: 0,
    sel22: 0,
    sel23: 0,
    sel31: 0,
    sel32: 0,
    sel33: 0,
    sel41: 0,
    sel42: 0,
    sel43: 0,
    sel51: 0,
    has_select2: 0,
    has_xiala2: 0,
    has_xiala_cn22: 0,
    has_xiala_eur2: 0,
    has_xiala_us2: 0,
    has_xiala_uk2: 0,
    has_xiala_jp2: 0,
    cn_2: '',
    cn22: '',
    eur2: '',
    us2: '',
    uk2: '',
    jp2: '',
    sel211: 0,
    sel212: 0,
    sel213: 0,
    sel221: 0,
    sel222: 0,
    sel223: 0,
    sel231: 0,
    sel232: 0,
    sel233: 0,
    sel241: 0,
    sel242: 0,
    sel243: 0,
    sel251: 0,
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

  swichNav: function (e) {
    var that = this;
    var currentTab = e.target.dataset.current
    // console.log(currentTab)
    if (this.data.currentTab === currentTab) {
      return false;
    } else {
      // 重置
      if (currentTab == 1){}
      else{ }
      that.setData({
        currentTab: currentTab
      })
     
    }
  },

  xiala: function () {
    var that = this
    if (that.data.currentTab == 0) {
    if (that.data.has_xiala == 0){
      that.setData({
      has_xiala: 1,
      has_xiala_cn2: 0,
      has_xiala_eur: 0,
      has_xiala_us: 0,
      has_xiala_uk: 0,
      has_xiala_jp: 0,
    })
    }
    else{
      that.setData({
      has_xiala: 0,
    })
    }
    }
    else{
      if (that.data.has_xiala2 == 0) {
        that.setData({
          has_xiala2: 1,
          has_xiala_cn22: 0,
          has_xiala_eur2: 0,
          has_xiala_us2: 0,
          has_xiala_uk2: 0,
          has_xiala_jp2: 0,
        })
      }
      else {
        that.setData({
          has_xiala2: 0,
        })
      }
    }
  },
  xiala_cn2: function () {
    var that = this
    if (that.data.currentTab == 0) {
    if (that.data.has_xiala_cn2 == 0) {
      that.setData({
        has_xiala: 0,
        has_xiala_cn2: 1,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
      })
    }
    else {
      that.setData({
        has_xiala_cn2: 0,
      })
    }
    }
    else {
      if (that.data.has_xiala_cn22 == 0) {
        that.setData({
          has_xiala2: 0,
          has_xiala_cn22: 1,
          has_xiala_eur2: 0,
          has_xiala_us2: 0,
          has_xiala_uk2: 0,
          has_xiala_jp2: 0,
        })
      }
      else {
        that.setData({
          has_xiala_cn22: 0,
        })
      }
    }

  },
  xiala_eur: function () {
    var that = this
    if (that.data.currentTab == 0) {
    if (that.data.has_xiala_eur == 0) {
      that.setData({
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 1,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
      })
    }
    else {
      that.setData({
        has_xiala_eur: 0,
      })
    }
    }
    else {
      if (that.data.has_xiala_eur2 == 0) {
        that.setData({
          has_xiala2: 0,
          has_xiala_cn22: 0,
          has_xiala_eur2: 1,
          has_xiala_us2: 0,
          has_xiala_uk2: 0,
          has_xiala_jp2: 0,
        })
      }
      else {
        that.setData({
          has_xiala_eur2: 0,
        })
      }
    }
    
  },
   xiala_us: function () {
    var that = this
     if (that.data.currentTab == 0) {
    if (that.data.has_xiala_us == 0) {
      that.setData({
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 1,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
      })
    }
    else {
      that.setData({
        has_xiala_us: 0,
      })
    }
     }
     else {
       if (that.data.has_xiala_us2 == 0) {
         that.setData({
           has_xiala2: 0,
           has_xiala_cn22: 0,
           has_xiala_eur2: 0,
           has_xiala_us2: 1,
           has_xiala_uk2: 0,
           has_xiala_jp2: 0,
         })
       }
       else {
         that.setData({
           has_xiala_us2: 0,
         })
       }
     }
  },
  xiala_uk: function () {
    var that = this
    if (that.data.currentTab == 0) {
    if (that.data.has_xiala_uk == 0) {
      that.setData({
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 1,
        has_xiala_jp: 0,
      })
    }
    else {
      that.setData({
        has_xiala_uk: 0,
      })
    }
    }
    else {
      if (that.data.has_xiala_uk2 == 0) {
        that.setData({
          has_xiala2: 0,
          has_xiala_cn22: 0,
          has_xiala_eur2: 0,
          has_xiala_us2: 0,
          has_xiala_uk2: 1,
          has_xiala_jp2: 0,
        })
      }
      else {
        that.setData({
          has_xiala_uk2: 0,
        })
      }
    }
  },
  xiala_jp: function () {
    var that = this
    if (that.data.currentTab == 0) {
    if (that.data.has_xiala_jp == 0) {
      that.setData({
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 1,
      })
    }
    else {
      that.setData({
        has_xiala_jp: 0,
      })
    }
    }
    else {
      if (that.data.has_xiala_jp2 == 0) {
        that.setData({
          has_xiala2: 0,
          has_xiala_cn22: 0,
          has_xiala_eur2: 0,
          has_xiala_us2: 0,
          has_xiala_uk2: 0,
          has_xiala_jp2: 1,
        })
      }
      else {
        that.setData({
          has_xiala_jp2: 0,
        })
      }
    }
  },
  sel11: function () {
    var that = this
    if (that.data.currentTab == 0){
    that.setData({
      has_select: 1,
      has_xiala: 0,
      has_xiala_cn2: 0,
      has_xiala_eur: 0,
      has_xiala_us: 0,
      has_xiala_uk: 0,
      has_xiala_jp: 0,
      cn: '36',
      cn2: '230',
      eur: '37.0',
      us: '--',
      uk: '--',
      jp: '23.0',
      sel11: 1,
      sel12: 0,
      sel13: 0,
      sel21: 0,
      sel22: 0,
      sel23: 0,
      sel31: 0,
      sel32: 0,
      sel33: 0,
      sel41: 0,
      sel42: 0,
      sel43: 0,
      sel51: 0,
    })
    }else{
      that.setData({
        has_select2: 1,
        has_xiala2: 0,
        has_xiala_cn22: 0,
        has_xiala_eur2: 0,
        has_xiala_us2: 0,
        has_xiala_uk2: 0,
        has_xiala_jp2: 0,
        cn_2: '32',
        cn22: '210',
        eur2: '35.0',
        us2: '--',
        uk2: '--',
        jp2: '21.0',
        sel211: 1,
        sel212: 0,
        sel213: 0,
        sel221: 0,
        sel222: 0,
        sel223: 0,
        sel231: 0,
        sel232: 0,
        sel233: 0,
        sel241: 0,
        sel242: 0,
        sel243: 0,
        sel251: 0,
      })

    }
  },
  sel12: function () {
    var that = this
    if (that.data.currentTab == 0) {
      that.setData({
        has_select: 1,
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
        cn: '37',
        cn2: '235',
        eur: '37.5',
        us: '5.0',
        uk: '4.5',
        jp: '23.5',
        sel11: 0,
        sel12: 1,
        sel13: 0,
        sel21: 0,
        sel22: 0,
        sel23: 0,
        sel31: 0,
        sel32: 0,
        sel33: 0,
        sel41: 0,
        sel42: 0,
        sel43: 0,
        sel51: 0,
      })
    } else {
      that.setData({
        has_select2: 1,
        has_xiala2: 0,
        has_xiala_cn22: 0,
        has_xiala_eur2: 0,
        has_xiala_us2: 0,
        has_xiala_uk2: 0,
        has_xiala_jp2: 0,
        cn_2: '33',
        cn22: '215',
        eur2: '35.5',
        us2: '--',
        uk2: '2.0',
        jp2: '21.5',
        sel211: 0,
        sel212: 1,
        sel213: 0,
        sel221: 0,
        sel222: 0,
        sel223: 0,
        sel231: 0,
        sel232: 0,
        sel233: 0,
        sel241: 0,
        sel242: 0,
        sel243: 0,
        sel251: 0,
      })
    }
  },
  sel13: function () {
    var that = this
    if (that.data.currentTab == 0) {
      that.setData({
        has_select: 1,
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
        cn: '38',
        cn2: '240',
        eur: '38.0',
        us: '5.5',
        uk: '5.0',
        jp: '24.0',
        sel11: 0,
        sel12: 0,
        sel13: 1,
        sel21: 0,
        sel22: 0,
        sel23: 0,
        sel31: 0,
        sel32: 0,
        sel33: 0,
        sel41: 0,
        sel42: 0,
        sel43: 0,
        sel51: 0,
      })
    } else {
      that.setData({
        has_select2: 1,
        has_xiala2: 0,
        has_xiala_cn22: 0,
        has_xiala_eur2: 0,
        has_xiala_us2: 0,
        has_xiala_uk2: 0,
        has_xiala_jp2: 0,
        cn_2: '34',
        cn22: '220',
        eur2: '36.0',
        us2: '4.0',
        uk2: '2.5',
        jp2: '22.0',
        sel211: 0,
        sel212: 0,
        sel213: 1,
        sel221: 0,
        sel222: 0,
        sel223: 0,
        sel231: 0,
        sel232: 0,
        sel233: 0,
        sel241: 0,
        sel242: 0,
        sel243: 0,
        sel251: 0,
      })
    }
  },
  sel21: function () {
    var that = this
    if (that.data.currentTab == 0) {
      that.setData({
        has_select: 1,
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
        cn: '39',
        cn2: '245',
        eur: '38.5',
        us: '6.0',
        uk: '5.5',
        jp: '24.5',
        sel11: 0,
        sel12: 0,
        sel13: 0,
        sel21: 1,
        sel22: 0,
        sel23: 0,
        sel31: 0,
        sel32: 0,
        sel33: 0,
        sel41: 0,
        sel42: 0,
        sel43: 0,
        sel51: 0,
      })
    } else {
      that.setData({
        has_select2: 1,
        has_xiala2: 0,
        has_xiala_cn22: 0,
        has_xiala_eur2: 0,
        has_xiala_us2: 0,
        has_xiala_uk2: 0,
        has_xiala_jp2: 0,
        cn_2: '35',
        cn22: '225',
        eur2: '37.0',
        us2: '4.5',
        uk2: '3.0',
        jp2: '22.5',
        sel211: 0,
        sel212: 0,
        sel213: 0,
        sel221: 1,
        sel222: 0,
        sel223: 0,
        sel231: 0,
        sel232: 0,
        sel233: 0,
        sel241: 0,
        sel242: 0,
        sel243: 0,
        sel251: 0,
      })
    }
  },
  sel22: function () {
    var that = this
    if (that.data.currentTab == 0) {
      that.setData({
        has_select: 1,
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
        cn: '40',
        cn2: '250',
        eur: '39.0',
        us: '7.0',
        uk: '6.5',
        jp: '25.0',
        sel11: 0,
        sel12: 0,
        sel13: 0,
        sel21: 0,
        sel22: 1,
        sel23: 0,
        sel31: 0,
        sel32: 0,
        sel33: 0,
        sel41: 0,
        sel42: 0,
        sel43: 0,
        sel51: 0,
      })
    } else {
      that.setData({
        has_select2: 1,
        has_xiala2: 0,
        has_xiala_cn22: 0,
        has_xiala_eur2: 0,
        has_xiala_us2: 0,
        has_xiala_uk2: 0,
        has_xiala_jp2: 0,
        cn_2: '36',
        cn22: '230',
        eur2: '37.5',
        us2: '5.0',
        uk2: '3.5',
        jp2: '23.0',
        sel211: 0,
        sel212: 0,
        sel213: 0,
        sel221: 0,
        sel222: 1,
        sel223: 0,
        sel231: 0,
        sel232: 0,
        sel233: 0,
        sel241: 0,
        sel242: 0,
        sel243: 0,
        sel251: 0,
      })
    }
  },
  sel23: function () {
    var that = this
    if (that.data.currentTab == 0) {
      that.setData({
        has_select: 1,
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
        cn: '41',
        cn2: '255',
        eur: '40.0',
        us: '7.5',
        uk: '7.0',
        jp: '25.5',
        sel11: 0,
        sel12: 0,
        sel13: 0,
        sel21: 0,
        sel22: 0,
        sel23: 1,
        sel31: 0,
        sel32: 0,
        sel33: 0,
        sel41: 0,
        sel42: 0,
        sel43: 0,
        sel51: 0,
      })
    } else {
      that.setData({
        has_select2: 1,
        has_xiala2: 0,
        has_xiala_cn22: 0,
        has_xiala_eur2: 0,
        has_xiala_us2: 0,
        has_xiala_uk2: 0,
        has_xiala_jp2: 0,
        cn_2: '37',
        cn22: '235',
        eur2: '38.0',
        us2: '5.5',
        uk2: '4.0',
        jp2: '23.5',
        sel211: 0,
        sel212: 0,
        sel213: 0,
        sel221: 0,
        sel222: 0,
        sel223: 1,
        sel231: 0,
        sel232: 0,
        sel233: 0,
        sel241: 0,
        sel242: 0,
        sel243: 0,
        sel251: 0,
      })
    }
  },
  sel31: function () {
    var that = this
    if (that.data.currentTab == 0) {
      that.setData({
        has_select: 1,
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
        cn: '42',
        cn2: '260',
        eur: '41.0',
        us: '8.0',
        uk: '7.5',
        jp: '26.0',
        sel11: 0,
        sel12: 0,
        sel13: 0,
        sel21: 0,
        sel22: 0,
        sel23: 0,
        sel31: 1,
        sel32: 0,
        sel33: 0,
        sel41: 0,
        sel42: 0,
        sel43: 0,
        sel51: 0,
      })
    } else {
      that.setData({
        has_select2: 1,
        has_xiala2: 0,
        has_xiala_cn22: 0,
        has_xiala_eur2: 0,
        has_xiala_us2: 0,
        has_xiala_uk2: 0,
        has_xiala_jp2: 0,
        cn_2: '38',
        cn22: '240',
        eur2: '38.5',
        us2: '6.0',
        uk2: '4.5',
        jp2: '24.0',
        sel211: 0,
        sel212: 0,
        sel213: 0,
        sel221: 0,
        sel222: 0,
        sel223: 0,
        sel231: 1,
        sel232: 0,
        sel233: 0,
        sel241: 0,
        sel242: 0,
        sel243: 0,
        sel251: 0,
      })
    }
  },
  sel32: function () {
    var that = this
    if (that.data.currentTab == 0) {
      that.setData({
        has_select: 1,
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
        cn: '43',
        cn2: '265',
        eur: '42.0',
        us: '8.5',
        uk: '8.0',
        jp: '26.5',
        sel11: 0,
        sel12: 0,
        sel13: 0,
        sel21: 0,
        sel22: 0,
        sel23: 0,
        sel31: 0,
        sel32: 1,
        sel33: 0,
        sel41: 0,
        sel42: 0,
        sel43: 0,
        sel51: 0,
      })
    } else {
      that.setData({
        has_select2: 1,
        has_xiala2: 0,
        has_xiala_cn22: 0,
        has_xiala_eur2: 0,
        has_xiala_us2: 0,
        has_xiala_uk2: 0,
        has_xiala_jp2: 0,
        cn_2: '39',
        cn22: '245',
        eur2: '39.0',
        us2: '7.0',
        uk2: '5.5',
        jp2: '24.5',
        sel211: 0,
        sel212: 0,
        sel213: 0,
        sel221: 0,
        sel222: 0,
        sel223: 0,
        sel231: 0,
        sel232: 1,
        sel233: 0,
        sel241: 0,
        sel242: 0,
        sel243: 0,
        sel251: 0,
      })
    }
  },
  sel33: function () {
    var that = this
    if (that.data.currentTab == 0) {
      that.setData({
        has_select: 1,
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
        cn: '44',
        cn2: '270',
        eur: '43.0',
        us: '9.0',
        uk: '8.5',
        jp: '27.0',
        sel11: 0,
        sel12: 0,
        sel13: 0,
        sel21: 0,
        sel22: 0,
        sel23: 0,
        sel31: 0,
        sel32: 0,
        sel33: 1,
        sel41: 0,
        sel42: 0,
        sel43: 0,
        sel51: 0,
      })
    } else {
      that.setData({
        has_select2: 1,
        has_xiala2: 0,
        has_xiala_cn22: 0,
        has_xiala_eur2: 0,
        has_xiala_us2: 0,
        has_xiala_uk2: 0,
        has_xiala_jp2: 0,
        cn_2: '40',
        cn22: '250',
        eur2: '40.0',
        us2: '7.5',
        uk2: '6.0',
        jp2: '25.0',
        sel211: 0,
        sel212: 0,
        sel213: 0,
        sel221: 0,
        sel222: 0,
        sel223: 0,
        sel231: 0,
        sel232: 0,
        sel233: 1,
        sel241: 0,
        sel242: 0,
        sel243: 0,
        sel251: 0,
      })
    }
  },
  sel41: function () {
    var that = this
    if (that.data.currentTab == 0) {
      that.setData({
        has_select: 1,
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
        cn: '45',
        cn2: '275',
        eur: '43.5',
        us: '9.5',
        uk: '9.0',
        jp: '27.5',
        sel11: 0,
        sel12: 0,
        sel13: 0,
        sel21: 0,
        sel22: 0,
        sel23: 0,
        sel31: 0,
        sel32: 0,
        sel33: 0,
        sel41: 1,
        sel42: 0,
        sel43: 0,
        sel51: 0,
      })
    } else {
      that.setData({
        has_select2: 1,
        has_xiala2: 0,
        has_xiala_cn22: 0,
        has_xiala_eur2: 0,
        has_xiala_us2: 0,
        has_xiala_uk2: 0,
        has_xiala_jp2: 0,
        cn_2: '41',
        cn22: '255',
        eur2: '40.5',
        us2: '8.0',
        uk2: '6.5',
        jp2: '25.5',
        sel211: 0,
        sel212: 0,
        sel213: 0,
        sel221: 0,
        sel222: 0,
        sel223: 0,
        sel231: 0,
        sel232: 0,
        sel233: 0,
        sel241: 1,
        sel242: 0,
        sel243: 0,
        sel251: 0,
      })
    }
  },
  sel42: function () {
    var that = this
    if (that.data.currentTab == 0) {
      that.setData({
        has_select: 1,
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
        cn: '46',
        cn2: '280',
        eur: '44.0',
        us: '10.0',
        uk: '9.5',
        jp: '28.0',
        sel11: 0,
        sel12: 0,
        sel13: 0,
        sel21: 0,
        sel22: 0,
        sel23: 0,
        sel31: 0,
        sel32: 0,
        sel33: 0,
        sel41: 0,
        sel42: 1,
        sel43: 0,
        sel51: 0,
      })
    } else {
      that.setData({
        has_select2: 1,
        has_xiala2: 0,
        has_xiala_cn22: 0,
        has_xiala_eur2: 0,
        has_xiala_us2: 0,
        has_xiala_uk2: 0,
        has_xiala_jp2: 0,
        cn_2: '42',
        cn22: '260',
        eur2: '41.0',
        us2: '8.5',
        uk2: '7.0',
        jp2: '26.0',
        sel211: 0,
        sel212: 0,
        sel213: 0,
        sel221: 0,
        sel222: 0,
        sel223: 0,
        sel231: 0,
        sel232: 0,
        sel233: 0,
        sel241: 0,
        sel242: 1,
        sel243: 0,
        sel251: 0,
      })
    }
  },
  sel43: function () {
    var that = this
    if (that.data.currentTab == 0) {
      that.setData({
        has_select: 1,
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
        cn: '47',
        cn2: '285',
        eur: '44.5',
        us: '11.0',
        uk: '10.5',
        jp: '28.5',
        sel11: 0,
        sel12: 0,
        sel13: 0,
        sel21: 0,
        sel22: 0,
        sel23: 0,
        sel31: 0,
        sel32: 0,
        sel33: 0,
        sel41: 0,
        sel42: 0,
        sel43: 1,
        sel51: 0,
      })
    } else {
      that.setData({
        has_select2: 1,
        has_xiala2: 0,
        has_xiala_cn22: 0,
        has_xiala_eur2: 0,
        has_xiala_us2: 0,
        has_xiala_uk2: 0,
        has_xiala_jp2: 0,
        cn_2: '43',
        cn22: '265',
        eur2: '41.5',
        us2: '9.5',
        uk2: '8.0',
        jp2: '26.5',
        sel211: 0,
        sel212: 0,
        sel213: 0,
        sel221: 0,
        sel222: 0,
        sel223: 0,
        sel231: 0,
        sel232: 0,
        sel233: 0,
        sel241: 0,
        sel242: 0,
        sel243: 1,
        sel251: 0,
      })
    }
  },
  sel51: function () {
    var that = this
    if (that.data.currentTab == 0) {
      that.setData({
        has_select: 1,
        has_xiala: 0,
        has_xiala_cn2: 0,
        has_xiala_eur: 0,
        has_xiala_us: 0,
        has_xiala_uk: 0,
        has_xiala_jp: 0,
        cn: '48',
        cn2: '290',
        eur: '45.0',
        us: '11.5',
        uk: '11.0',
        jp: '29.0',
        sel11: 0,
        sel12: 0,
        sel13: 0,
        sel21: 0,
        sel22: 0,
        sel23: 0,
        sel31: 0,
        sel32: 0,
        sel33: 0,
        sel41: 0,
        sel42: 0,
        sel43: 0,
        sel51: 1,
      })
    } else {
      that.setData({
        has_select2: 1,
        has_xiala2: 0,
        has_xiala_cn22: 0,
        has_xiala_eur2: 0,
        has_xiala_us2: 0,
        has_xiala_uk2: 0,
        has_xiala_jp2: 0,
        cn_2: '44',
        cn22: '270',
        eur2: '42.0',
        us2: '10.0',
        uk2: '8.5',
        jp2: '27.0',
        sel211: 0,
        sel212: 0,
        sel213: 0,
        sel221: 0,
        sel222: 0,
        sel223: 0,
        sel231: 0,
        sel232: 0,
        sel233: 0,
        sel241: 0,
        sel242: 0,
        sel243: 0,
        sel251: 1,
      })
    }
  },

  toduizhao: function () {
    wx.navigateTo({
      url: '../duizhao/duizhao'
    })
  },

  onPullDownRefresh: function (e) {
    var that = this
    that.setData({
      currentTab: 0,
    has_xiala:0,
    has_xiala_cn2: 0,
    has_xiala_eur: 0,
    has_xiala_us: 0,
    has_xiala_uk: 0,
    has_xiala_jp: 0,
    has_select: 0,
    cn:'',
    cn2: '',
    eur: '',
    us: '',
    uk: '',
    jp: '',
    sel11: 0,
    sel12: 0,
    sel13: 0,
    sel21: 0,
    sel22: 0,
    sel23: 0,
    sel31: 0,
    sel32: 0,
    sel33: 0,
    sel41: 0,
    sel42: 0,
    sel43: 0,
    sel51: 0,
    has_select2: 0,
    has_xiala2: 0,
    has_xiala_cn22: 0,
    has_xiala_eur2: 0,
    has_xiala_us2: 0,
    has_xiala_uk2: 0,
    has_xiala_jp2: 0,
    cn_2: '',
    cn22: '',
    eur2: '',
    us2: '',
    uk2: '',
    jp2: '',
    sel211: 0,
    sel212: 0,
    sel213: 0,
    sel221: 0,
    sel222: 0,
    sel223: 0,
    sel231: 0,
    sel232: 0,
    sel233: 0,
    sel241: 0,
    sel242: 0,
    sel243: 0,
    sel251: 0,
    })
    wx.stopPullDownRefresh()
  },



})