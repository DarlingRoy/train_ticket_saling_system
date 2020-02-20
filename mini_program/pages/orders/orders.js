// pages/orders/orders.js

var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordersList: [],
    hidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var self = this;
    wx.request({
      url: 'http://localhost:8080/orders/findByClient_id',
      data: {
        client_id: wx.getStorageSync('user').id
      },
      success: function(res) {

        if (res.data.length > 0) {
          self.setData({
            ordersList: res.data,
            hidden: true

          })
          for (var i = 0; i < res.data.length; i++) {
            var index1 = "ordersList[" + i + "].order_time"
            self.setData({
              [index1]: util.formatTime(new Date(res.data[i].order_time)),
            })
          }
         
        }
        else{
          self.setData({
            hidden:false
          })          
        }
      }
    })
  },

  bindSelect: function(e) {
    wx.navigateTo({
      url: '../ticket/ticket',
    })
    wx.setStorageSync('ticket_id', e.currentTarget.dataset.ticketId)
    wx.setStorageSync('order_number', e.currentTarget.dataset.orderNumber)
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
    this.onLoad()
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