//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    selector:[],
    index: {},
    dateIndex: {},
    dateSelector: [],
    startMonth:{},
    endMonth:{},
    hiddenmodalput:true
  },
  onLoad: function () {

    this.setData({
      selector: app.globalData.selector,
      index: app.globalData.index,
      dateIndex: app.globalData.dateIndex,
      dateSelector: app.globalData.dateSelector,
      startMonth: app.globalData.startMonth,
      endMonth: app.globalData.endMonth
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
  /**
   * 点击时间选择器
   */
  clickDateSelector:function(e){
    app.overallSelect(e);
    app.overallAssignmentIndex(this);
  },
  /**
   * 开始月份选择器 绑定更改
   */
  bindStartMonthChange:function(e){
    app.orerallBindStartMonthChange(e);
    app.overallAssignmentIndex(this);
  },
  /**
   * 结束月份选择器 绑定更改
   */
  bindEndMonthChange:function(e){
    app.orerallBindEndMonthChange(e);
    app.overallAssignmentIndex(this);
  },
  addModel:function(e){
    this.data.hiddenmodalput=false;
    this.setData({
      hiddenmodalput:this.data.hiddenmodalput
    })
  },
  cancel:function(e){
    this.data.hiddenmodalput = true;
    this.setData({
      hiddenmodalput: this.data.hiddenmodalput
    })
  },
  purchaseBill:function(e){
    wx.navigateTo({
      url:"../purchase/purchase"
    })
  }
})
