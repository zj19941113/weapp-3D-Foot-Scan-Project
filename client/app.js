//app.js
var env = 'production';
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
if (env === 'development') var conf = config.devconf;
if (env === 'production') var conf = config.prodconf;

App({
    onLaunch: function () {
  //      qcloud.setLoginUrl(config.service.loginUrl)
    },

globalData: {
  userInfo: null,
  openid: '',
  token: '',
  urlHeader: conf.host,
}

})