// pages/newsIndex/newsIndex.js

Page({
  onLoad: function () {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  },
  jumpAnotherPage: function () {
    wx.navigateTo({

      url: '../newsContent/newsContent',                  //这个是要加载的页面的路径

    })
  }
});