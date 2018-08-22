//app.js

//logs.js
const util = require('/utils/util.js')

App({
  onLaunch: function () {

    this.globalData.selector = this.globalData.selector.concat({ id: 3, value: '北京' });

    this.globalData.dateSelector = this.globalData.dateSelector.concat({ id: 2, value: '本月' }, { id: 3, value:'本季度' },{id:4,value:'自定义'})

    this.globalData.endMonth = util.formatTime(new Date());

    this.globalData.startMonth = util.lastMonth(new Date());

    

    /* 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

     登录
    wx.login({
      success: res => {
         发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
     获取用户信息
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
    })*/

  },
  /**
   * 初始化全局变量
   */
  globalData: {
    selector: [{ id: 1, value: '全部' }, { id: 2, value: '长沙' }],
    dateSelector: [{ id: 1, value: '本日' }],
    index:0,
    dateIndex:0,
    startMonth: '2017-05',
    endMonth: {},
  },
  /**
   * 初始化全局变量
   */
  overallInitializationVariable: function (that){
    // 初始化店铺选择索引
    if (that.data.index != this.globalData.index){
      that.data.index = this.globalData.index;
      that.setData({
        index: that.data.index
      })
    }
    // 初始化时间导航索引
    if (that.data.dateIndex != this.globalData.dateIndex){
      that.data.dateIndex = this.globalData.dateIndex;
      that.setData({
        dateIndex: that.data.dateIndex
      })
    }
    // 初始化自定义开始月份
    if (that.data.startMonth != this.globalData.startMonth){
      that.data.startMonth = this.globalData.startMonth;
      that.setData({
        startMonth: that.data.startMonth
      })
    }
    // 初始化自定义结束月份
    if (that.data.endMonth != this.globalData.endMonth) {
      that.data.endMonth = this.globalData.endMonth;
      that.setData({
        endMonth: that.data.endMonth
      })
    }
  },
  // 修改全局绑定店铺索引
  overallBindPickerChange:function(e){
    console.log(this.globalData.selector[e.detail.value].value);
    if (this.globalData.index != e.detail.value){
      this.globalData.index = e.detail.value;
    }
  },
  // 修改全局时间导航索引
  overallSelect:function(e){
    console.log(this.globalData.dateSelector[e.currentTarget.dataset.index].value);
    if (this.globalData.dateIndex != e.currentTarget.dataset.index) {
      this.globalData.dateIndex = e.currentTarget.dataset.index;
    }
  },
  // 修改全局自定义启动绑定月份
  orerallBindStartMonthChange:function(e){
    console.log(e.detail.value);
    if (this.globalData.startMonth != e.detail.value){
      this.globalData.startMonth = e.detail.value;
    }
  },
  // 修改全局自定义结束绑定月份
  orerallBindEndMonthChange:function(e){
    console.log(e.detail.value);
    if (this.globalData.startMonth > e.detail.value){
      console.log("no")
    }else{
      if (this.globalData.endMonth != e.detail.value) {
        this.globalData.endMonth = e.detail.value;
      }
    }
  }
})