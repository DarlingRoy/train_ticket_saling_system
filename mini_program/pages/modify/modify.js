// pages/modify/modify.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {},
    name: '',
    hometown: '',
    telphone: '',
    type: '',

    flag1: false,
    flag2: false,
    flag3: false,
    flag4: false,

    typeList: ['成人', '学生'],
    index: '',
    hidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var self = this
    wx.request({
      url: 'http://localhost:8080/client/findById',
      data: {
        id: wx.getStorageSync('user').id
      },
      success: function(res) {
        self.setData({
          user: res.data
        })
      }
    })

  },

  formSubmit: function(e) {

    var self = this
    wx.request({
      url: 'http://localhost:8080/client/update',
      data: {
        id: wx.getStorageSync('user').id,
        name: (self.data.flag1 ? self.data.name : wx.getStorageSync('user').name),
        hometown: (self.data.flag2 ? self.data.hometown : wx.getStorageSync('user').hometown),
        type: (self.data.flag3 ? self.data.type : wx.getStorageSync('user').type),
        telphone: (self.data.flag4 ? self.data.telphone : wx.getStorageSync('user').telphone)
      }
    })

    wx.showToast({
      title: '修改成功',
      icon: 'success',
      duration: 1000
    })
    setTimeout(function() {
      wx.navigateBack({

      })
    }, 1000)
  },

  modifyName: function(e) {
    this.setData({
      name: e.detail.value,
      flag1: true
    })
  },

  modifyHometown: function(e) {
    this.setData({
      hometown: e.detail.value,
      flag2: true
    })
  },

  modifyType: function(e) {
    this.setData({
      type: e.detail.value,
      flag3: true
    })
  },

  bindPickerChange: function(e) {
    this.setData({
      type: this.data.typeList[e.detail.value],
      index: e.detail.value,
      flag3: true,
      hidden: true
    })
  },

  modifyTelphone: function(e) {
    this.setData({
      telphone: e.detail.value,
      flag4: true
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