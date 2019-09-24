Page({
  data: {
    name: 'yiminghe',
    gender: 'male',
    locale: 'zh-CN',
  },
  changeLang() {
    this.setData({
      locale: this.data.locale === 'zh-CN' ? 'en-US' : 'zh-CN',
    });
  }
});
