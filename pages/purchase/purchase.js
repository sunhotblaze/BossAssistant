// pages/purchase/purchase.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selector: [],
    index: {},
    dateIndex: {},
    dateSelector: [],
    startMonth: {},
    endMonth: {}
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
  clickDateSelector: function (e) {
    app.overallSelect(e);
    app.overallAssignmentIndex(this);
  },
  /**
  * 开始月份选择器 绑定更改
  */
  bindStartMonthChange: function (e) {
    app.orerallBindStartMonthChange(e);
    app.overallAssignmentIndex(this);
  },
  /**
   * 结束月份选择器 绑定更改
   */
  bindEndMonthChange: function (e) {
    app.orerallBindEndMonthChange(e);
    app.overallAssignmentIndex(this);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      selector: app.globalData.selector,
      index: app.globalData.index,
      dateIndex: app.globalData.dateIndex,
      dateSelector: app.globalData.dateSelector,
      startMonth: app.globalData.startMonth,
      endMonth: app.globalData.endMonth
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