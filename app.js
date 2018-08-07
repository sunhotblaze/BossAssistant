//app.js
App({
  onLaunch: function () {

    this.globalData.selector = this.globalData.selector.concat({ id: 3, value: '北京' });

    this.globalData.dateSelector = this.globalData.dateSelector.concat({ id: 3, value: '本月' }, { id: 4, value:'本季度' },{id:5,value:'自定义'})

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
  },
  globalData: {
    userInfo: null,
    selector: [{ id: 1, value: '全部' }, { id: 2, value: '长沙' }],
    dateSelector: [{ id: 1, value: '本日' }, { id: 2, value: '本周' }],
    index:0,
    dateIndex:0
    
  },
  overallAssignmentIndex: function (that){
    // 修改选择索引
    if (that.data.index != this.globalData.index){
      that.data.index = this.globalData.index;
      that.setData({
        index: that.data.index
      })
    }
    // 修改选择时间索引
    if (that.data.dateIndex != this.globalData.dateIndex){
      that.data.dateIndex = this.globalData.dateIndex;
      that.setData({
        dateIndex: that.data.dateIndex
      })
    }
  },
  overallBindPickerChange:function(e){
    console.log(this.globalData.selector[e.detail.value].value);
    if (this.globalData.index != e.detail.value){
      this.globalData.index = e.detail.value;
    }
  },
  overallSelect:function(e){
    console.log(this.globalData.dateSelector[e.currentTarget.dataset.index].value);
    if (this.globalData.dateIndex != e.currentTarget.dataset.index) {
      this.globalData.dateIndex = e.currentTarget.dataset.index;
    }
  }
})