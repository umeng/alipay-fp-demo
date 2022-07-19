// 获取应用实例
import { getToken } from '../../fp';

Page({
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  getTk(){
    getToken(function (data) {
      if (data.token) {
        my.showModal({
          title: `获取token成功${data.token}`
        })
      } else {
        my.showToast({
          title: '获取token失败，检查接口服务是否可用，本地设置勾选不校验域名白名单',
        })
      }
      console.log(data); // --> {token:'xxx'};
    });
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
