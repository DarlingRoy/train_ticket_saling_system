// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    id: '',
    password: '',
    password_confirm: '',
    telphone: '',
    hometown: '',
    type: '',
    typeList: ['成人', '学生'],
    index: '',
    hidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  formSubmit: function(e) {
    if (this.data.id && this.data.name && this.data.telphone && this.data.hometown && this.data.type && this.data.password && this.data.password_confirm) {
      if (this.data.password != this.data.password_confirm) {
        wx.showModal({
          title: '温馨提醒',
          content: '密码输入不匹配，请重新输入',
          showCancel: false
        })
      } else {
        var self = this
        wx.request({
          url: 'http://localhost:8080/client/save',
          data: {
            id: self.data.id,
            name: self.data.name,
            telphone: self.data.telphone,
            hometown: self.data.hometown,
            type: self.data.type,
            password: self.data.password
          },
          success: function(res) {
            self.setData({
              name: '',
              id: '',
              telphone: '',
              hometown: '',
              type: '',
              password:'',
              password_confirm:'',
              hidden:false
            })
          }

        })
        wx.showToast({
          title: '注册成功',
          icon: 'success',
          duration: 2000
        })
      }
    } else {
      wx.showModal({
        title: '温馨提醒',
        content: '请输入完整信息',
        showCancel: false
      })
    }
  },

  inputName: function(e) {
    this.setData({
      name: e.detail.value
    })
  },

  inputId: function(e) {
    this.setData({
      id: e.detail.value
    })
  },

  inputTel: function(e) {
    this.setData({
      telphone: e.detail.value
    })
  },

  inputHome: function(e) {
    this.setData({
      hometown: e.detail.value
    })
  },

  bindPickerChange: function(e) {
    this.setData({
      type: this.data.typeList[e.detail.value],
      index: e.detail.value,
      hidden: true
    })
  },

  inputPassword: function(e) {
    this.setData({
      password: e.detail.value
    })
  },

  inputPasswordConfirm: function(e) {
    this.setData({
      password_confirm: e.detail.value
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