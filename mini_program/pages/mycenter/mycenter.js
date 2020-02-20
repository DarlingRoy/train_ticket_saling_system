// pages/mycenter/mycenter.js
Page({
  data: {
    imageURL: '../../images/touxiang.png',
    hidden: true,
    clientID: '',
    password: '',
    user: {},
    flag: false, //用于标识用户是否登录
  },

  onLoad: function(options) {
    this.setData({
      flag: wx.getStorageSync('flag'),
    })

    if (wx.getStorageSync('flag')) {
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
    }

  },

  login: function(e) {
    this.setData({
      hidden: false
    })
  },

  formSubmit: function(e) {
    var self = this

    //console.log(wx.getStorageSync('match'))
    if (wx.getStorageSync('match')) {
      this.setData({
        hidden: true
      })
      wx.request({
        url: 'http://localhost:8080/client/findById',
        data: {
          id: self.data.clientID
        },
        success: function(res) {
          
          if (self.data.password == res.data.password) {
            self.setData({
              user: res.data
            })
            wx.setStorageSync('user', res.data)
            wx.setStorageSync('flag', true)
            self.setData({
              flag: true
            })
          }else{
            wx.showToast({
              title: '密码错误',
              icon: 'none',
              duration: 1000
            })
          }
        },
      })
    } else {
      wx.showToast({
        title: '账号不存在',
        icon: 'none',
        duration: 1000
      })
    }

  },

  idInput: function(e) {
    var self = this
    wx.request({
      url: 'http://localhost:8080/client/findAll',
      complete: function(res) {
        self.setData({
          clientID: e.detail.value
        })
        for (var i = 0; i < res.data.length; i++) {
          if (self.data.clientID == res.data[i].id) {
            wx.setStorageSync('match', true)
            break
          }
        }
      }
    })
  },

  passwordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },

  gotoOrders: function() {
    if (wx.getStorageSync('flag')) {
      wx.navigateTo({
        url: '../orders/orders',
      })
    } else {
      wx.showModal({
        title: '温馨提醒',
        content: '请先登录账户',
        showCancel: false
      })
    }
  },

  gotoUserInfo: function(e) {
    wx.navigateTo({
      url: '../userInfo/userInfo',
    })
  },

  gotoModify: function(e) {
    if (wx.getStorageSync('flag')) {
      wx.navigateTo({
        url: '../modify/modify',
      })
    } else {
      wx.showModal({
        title: '温馨提醒',
        content: '请先登录账户',
        showCancel: false
      })
    }
  },

  cancel: function(e) {
    this.setData({
      hidden: true
    })
  },

  onShow: function() {
    this.onLoad()
  }
})