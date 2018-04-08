//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  var that = this
  that.globalData.wxData.appid = 'wx654f513a143e80df'
  that.globalData.wxData.secret = '2a66ff3175e0ba7d7064b5bb41ae7d8f'
  that.globalData.wxData.token = '8_GoIBTcYRZGrNomQQ6YOMO50aFMo1S3HwRKzRR82wVzuxDmVV5xYsFCbK1E-ujNwEd642rAtZ6eCQ0WrTdLsLIyUCpNejdNKJgyOZXzmXJwu7Fa-Q9WIrKRf3GWUk3dTR-2QDYNdkMrVGimNgMUYgAIADLP'
  

  
  },
  globalData: {
    userInfo: null
    , wxData: {
      appid: null
      , secret: null
      , token: null
    }

  }
})