// pages/quary/quary.js
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ticketList: [],
    ticketId: '',
    goData: '',
    hidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var self = this
    wx.request({
      url: 'http://localhost:8080/ticket/findBy4',
      data: {
        start_station: wx.getStorageSync('startName'),
        arrive_station: wx.getStorageSync('endName'),
        go_date: '2019-' + wx.getStorageSync('month') + '-' + wx.getStorageSync('day'),
        type: (wx.getStorageSync('stu_ticket') ? '学生票' : '成人票')
      },
      success: function(res) {

        for (var i = 0; i < res.data.length; i++) {
          var start = "ticketList[" + i + "].start_station"
          var end = "ticketList[" + i + "].arrive_station"
          var go_time = "ticketList[" + i + "].go_time"
          var arrive_time = "ticketList[" + i + "].arrive_time"
          var train_number = "ticketList[" + i + "].train_number"
          var seat_type = "ticketList[" + i + "].seat_type"
          var type = "ticketList[" + i + "].type"
          var price = "ticketList[" + i + "].price"
          var ticket_id = "ticketList[" + i + "].ticket_id"
          var ticket_goDate = "ticketList[" + i + "].go_date"
          var remain = "ticketList[" + i + "].remain"

          self.setData({
            [go_time]: res.data[i].go_time.toString().substring(0, 5),
            [arrive_time]: util.formatTime(new Date(res.data[i].arrive_time)).split(' ')[1].substring(0, 5),
            [start]: res.data[i].start_station,
            [end]: res.data[i].arrive_station,
            [train_number]: res.data[i].train_number,
            [price]: res.data[i].price,
            [seat_type]: res.data[i].seat_type,
            [type]: res.data[i].type,
            [ticket_id]: res.data[i].ticket_id,
            [ticket_goDate]: res.data[i].go_date.toString(),
            [remain]: res.data[i].remain

          })

          if (res.data[i].go_date.toString().replace(/-/g, '') < util.formatTime(new Date(res.data[i].arrive_time)).split(' ')[0].replace(/\//g, '')) {
            self.setData({
              hidden: false
            })
          } else {
            self.setData({
              hidden: true
            })
          }

        }
      }
    })

  },

  buyTicket: function(e) {
    if (wx.getStorageSync('flag')) {
      if (wx.getStorageSync('user').type == '成人' && wx.getStorageSync('stu_ticket')) {
        wx.showModal({
          title: '温馨提醒',
          content: '您非学生不能购买学生票',
          showCancel: false
        })
      } else {
        if (e.currentTarget.dataset.remain > 0) {
          wx.showToast({
            title: '购票成功',
            icon: 'success',
            duration: 2000
          })
          this.setData({
            ticketId: e.currentTarget.dataset.ticketId,
            goData: e.currentTarget.dataset.goDate,
          })

          var self = this
          var timestamp = Date.parse(new Date())
          var time = util.formatTime(new Date()).toString().replace(/\//g, '-')
          var go_off = e.currentTarget.dataset.goDate + ' ' + e.currentTarget.dataset.goTime + ':00'

          wx.request({
            url: 'http://localhost:8080/orders/save',
            data: {
              order_number: timestamp.toString(),
              client_id: wx.getStorageSync('user').id,
              go_date: go_off,
              order_time: time,
              ticket_id: self.data.ticketId
            }
          })
        } else {
          wx.showModal({
            title: '温馨提醒',
            content: '当前车票余量不足',
            showCancel: false
          })
        }

      }
      this.onLoad()
    } else {
      wx.showModal({
        title: '温馨提醒',
        content: '请先登录后购票',
        showCancel: false
      })
    }
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