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
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    app.overallInitializationVariable(this);
  },
  /**
  * 店铺选择器 绑定更改
  */
  bindPickerChange: function (e) {
    app.overallBindPickerChange(e);
    app.overallInitializationVariable(this);
  },
  /**
   * 时间选择器 绑定更改
   */
  clickDateSelector:function(e){
    app.overallSelect(e);
    app.overallInitializationVariable(this);
  },
  /**
   * 开始月份选择器 绑定更改
   */
  bindStartMonthChange:function(e){
    app.orerallBindStartMonthChange(e);
    app.overallInitializationVariable(this);
  },
  /**
   * 结束月份选择器 绑定更改
   */
  bindEndMonthChange:function(e){
    app.orerallBindEndMonthChange(e);
    app.overallInitializationVariable(this);
  },
  /**
   * 添加采购弹窗
   */
  addPurchaseModel:function(e){
    this.data.hiddenmodalput=false;
    this.setData({
      hiddenmodalput:this.data.hiddenmodalput
    })
  },
  /**
   * 添加弹窗取消按钮
   */
  cancel:function(e){
    this.data.hiddenmodalput = true;
    this.setData({
      hiddenmodalput: this.data.hiddenmodalput
    })
  },
  /**
   * 跳转采购界面
   */
  purchaseBill:function(e){
    wx.navigateTo({
      url:"../purchase/purchase"
    })
  }
})
