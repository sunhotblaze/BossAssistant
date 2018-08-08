//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    /*motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),*/
    selector:[],
    index: {},
    dateIndex: {},
    dateSelector: []
  },
  onLoad: function () {

    this.setData({
      selector: app.globalData.selector,
      index: app.globalData.index,
      dateIndex: app.globalData.dateIndex,
      dateSelector: app.globalData.dateSelector
    })
  /*
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }*/
  },
  /*getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },*/

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    app.overallAssignmentIndex(this);
  },
  /**
  * 选择器 绑定更改
  */
  bindPickerChange: function (e) {
    app.overallBindPickerChange(e);
    app.overallAssignmentIndex(this);
  },
  click:function(e){
    app.overallSelect(e);
    app.overallAssignmentIndex(this);
  }
})
