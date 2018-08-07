// pages/main/main.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selector:[],
    index:{}
  },
  /**
   * 选择器 绑定更改
   */
  bindPickerChange:function(e){
    app.overallBindPickerChange(e);
    app.overallAssignmentIndex(this);
  },

  /*scrollTopFun:function(e){

    let that = this;

    var query = wx.createSelectorQuery();
    创建节点选择器
     query.select('.selector').boundingClientRect();
     query.exec(function (res) {

      console.log("高度" + e.detail.scrollHeight/2);

      console.log("滚动位置" + e.detail.scrollTop);

      if ((e.detail.scrollHeight/2) <= e.detail.scrollTop) {
        that.setData({
          top: true
        })
      }else{
        that.setData({
          top: false
        })
      }

    })
  },*/

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      selector: app.globalData.selector,
      index: app.globalData.index
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
    app.overallAssignmentIndex(this);
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