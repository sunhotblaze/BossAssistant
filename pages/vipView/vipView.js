// pages/main/main.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selector: [],
    index: {},
    currentPage:1,
    pageRows:13,
    searchKey:'',
    sortId:0,
    vipsortoption: [{
      id: 0,
      value: '选择排序方式'
    }, {
      id: 1,
      value: '按昵称排序'
    }, {
      id: 2,
      value: '按余额排序'
    }, {
      id: 3,
      value: '按加入时间排序'
    }, {
      id: 4,
      value: '按最后活跃时间排序'
    }],
    sortoptionindex:0,
    testUsers:[
    ]



  },

  getVip:function() {
    if(this.data.currentPage!=1){
      let list = this.data.testUser2;
      console.log(list)
      this.data.testUsers=this.data.testUsers.concat(list)
      console.log(this.data.testUsers)
    }
    
  },
  loadBaseData:function(){
    
  },

  /**
   * 店铺选择器 绑定更改
   */
  bindPickerChange: function(e) {
    app.overallBindPickerChange(e);
    app.overallInitializationVariable(this);
  },

  vipsortoptionchange:function(e){
    if(e.detail.value!=this.data.sortoptionindex){
      this.setData({
        sortoptionindex:e.detail.value
      })
    }
  },

  scrolltolower:function(){
    this.data.currentPage++
    console.log('当前第'+this.data.currentPage+'页')
    this.getVip();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //初始化变量
    this.setData({
      selector: app.globalData.selector,
      index: app.globalData.index,
      testUsers: [{
        num: 1, name: '张三', money: 233, neartime: '昨天', unique: 1
      }, {
          num: 2, name: '王二', money: 233, neartime: '昨天', unique: 2
        }, {
          num: 3, name: '李四', money: 233, neartime: '昨天', unique: 3
        }, {
          num: 4, name: '赵五', money: 233, neartime: '昨天', unique: 4
        }, {
          num: 5, name: '田六', money: 233, neartime: '昨天', unique: 5
        }
        , {
          num: 6, name: '魏七', money: 233, neartime: '昨天', unique: 6
        }, {
          num: 7, name: '杨八', money: 233, neartime: '昨天', unique: 7
        }, {
          num: 8, name: '邓九', money: 233, neartime: '昨天', unique: 8
        }, {
          num: 9, name: '黄十', money: 233, neartime: '昨天', unique: 9
        }, {
          num: 10, name: '张三', money: 233, neartime: '昨天', unique: 10
        }
        , {
          num: 11, name: '张三', money: 233, neartime: '昨天', unique: 11
        }, {
          num: 12, name: '张三', money: 233, neartime: '昨天', unique: 12
        }, {
          num: 12, name: '张三', money: 233, neartime: '昨天', unique: 122
        }, {
          num: 12, name: '张三', money: 233, neartime: '昨天', unique: 123
        }],
      testUser2:[{
        num: 13, name: '张三', money: 233, neartime: '昨天', unique: 13
      }
        , {
          num: 14, name: '张三', money: 233, neartime: '昨天', unique: 14
        }, {
          num: 15, name: '张三', money: 233, neartime: '昨天', unique: 15
        }, {
          num: 16, name: '张三', money: 233, neartime: '昨天', unique: 16
        }, {
          num: 17, name: '张三', money: 233, neartime: '昨天', unique: 17
        }, {
          num: 18, name: '张三', money: 233, neartime: '昨天', unique: 18
        }, {
          num: 19, name: '张三', money: 233, neartime: '昨天', unique: 20
        }, {
          num: 19, name: '张三', money: 233, neartime: '昨天', unique: 21
        }, {
          num: 19, name: '张三', money: 233, neartime: '昨天', unique: 22
        }, {
          num: 19, name: '张三', money: 233, neartime: '昨天', unique: 23
        }, {
          num: 19, name: '张三', money: 233, neartime: '昨天', unique: 24
        }, {
          num: 19, name: '张三', money: 233, neartime: '昨天', unique: 25
        }, {
          num: 19, name: '张三', money: 233, neartime: '昨天', unique: 26
        }, {
          num: 19, name: '张三', money: 233, neartime: '昨天', unique: 27
        }, {
          num: 19, name: '张三', money: 233, neartime: '昨天', unique: 29
        },]
      
    })
  },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    app.overallInitializationVariable(this);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})