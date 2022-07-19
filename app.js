import { setFpConfig, getToken } from './fp.js';
App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    setFpConfig({
      accessKey: "1234567890",// 填写分配的accesskey
      endpoint: "http://39.101.134.166",//设置网关信息，
    });
    // 在需要获取token的地方调用getToken方法，在callback中获取token
    getToken(function (data) {
      console.log(data); // --> {token:'xxx'};
    });
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
