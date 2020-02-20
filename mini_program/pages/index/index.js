//index.js
//获取应用实例
var app = getApp()

var timestamp = Date.parse(new Date());
var date = new Date(timestamp);

Page({
  data: {
    month: (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1),
    day: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),

    startName: '出发站',

    endName: '目的站',
  },

  stu_ticket_choose: function(e) {
    wx.setStorageSync('stu_ticket', e.detail.value)
    this.setData({
      stu_ticket: e.detail.value
    })
  },

  select_date: function(e) {
    wx.navigateTo({
      url: '../date/date',
    })
  },

  gotoStart: function() {
    wx.navigateTo({
      url: '../start/start'
    })
  },

  gotoDestination: function() {
    wx.navigateTo({
      url: '../destination/destination'
    })
  },

  gotoQuery: function() {
    if (this.data.startName == this.data.endName) {
      wx.showModal({
        title: '温馨提示',
        content: '不能选择相同的出发站点和目的站点，请重新选择',
        showCancel: false
      })
    } else {
      wx.navigateTo({
        url: '../query/query'
      })
    }
  },

  onLoad: function() {
    var name1 = wx.getStorageSync('startName');
    if (name1) {
      this.setData({
        startName: name1
      });
    }
    var name2 = wx.getStorageSync('endName');
    if (name2) {
      this.setData({
        endName: name2
      });
    }
    var m = wx.getStorageSync("month")
    var d = wx.getStorageSync("day")
    if (m && d) {
      this.setData({
        month: (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1),
        day: date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      })
    }

    wx.setStorageSync('stu_ticket', this.data.stu_ticket)
  },

  onShow: function(e) {
    var name1 = wx.getStorageSync('startName');
    if (name1) {
      this.setData({
        startName: name1
      });
    }
    var name2 = wx.getStorageSync('endName');
    if (name2) {
      this.setData({
        endName: name2
      });
    }
    var m = wx.getStorageSync('month')
    var d = wx.getStorageSync('day')
    if (m && d) {
      this.setData({
        month: m,
        day: d
      })
    }
  },

  switch: function() {
    var name1 = wx.getStorageSync('startName');
    var name2 = wx.getStorageSync('endName');
    if (name1 && name2) {
      this.setData({
        startName: name2,
        endName: name1,
      })

      wx.setStorageSync('startName', name2)
      wx.setStorageSync('endName', name1)
    }
  },

})