Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  onTap: function (){
    console.log('press')
    wx.switchTab({
      url: '../posts/posts',
    })
    // wx.navigateTo({
    //   url: '../posts/posts',
    // });   // 执行onHide: function ()，可返回上级页面

    // wx.redirectTo({
    //   url: '../posts/posts',
    // })    // 执行onUnload: function ()，不可返回上级页面
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  // onHide: function () {
  //   console.log("onHide")
  // },

  /**
   * 生命周期函数--监听页面卸载
   */
  // onUnload: function () {
  //   console.log("onUnload")
  // },

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