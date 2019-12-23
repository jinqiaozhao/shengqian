/**
 * Created by yang on 2017/2/17.
 */
function myAjax(option) {
  let myDefaultConfig={
    emulateHTTP:true,
    emulateJSON:true,
    headers:{'Authorization':""},
    body:{},
    param:{}
  }
  let url = option.url;
  let method =option.method;
  switch (true) {

    // 登录时 不需要带token
    case  url === "/login.do":
      break;
    case method === "get":
      option.params = option.params || {};
      break;
    case method === "post":
      break;
    default:
      break;
  }
// 4. 合并请求参数
  let targetObj = Object.assign({}, myDefaultConfig, option);
// 5. 发起ajax请求
  this.$http(targetObj)
    .then(
      // 请求成功时
      response => {
    let data = response.data;
  if(data.code==204){
    m$.template({
      val:data.message,
      time:500
    })
    this.$router.replace("/login/1?perUrl="+this.$route.fullPath);
    return;
  }
  switch (true){


    // // token 失效
    // case data.msg === "error.access.session.invalid" :
    //   store.commit(LOADER_SET_AJAX_NUM, 0); // 清空请求数
    //   window.location.hash = "/login";
    //   break;
    //
    // // 请求成功 数据可能不合理
    // // 针对登录 错误特殊处理
    // case data.success === false && url !== "/login.do":
    //   //console.log(`${url} 有问题找后台`);
    //
    //   // 已经有请求报错
    //   // 表示不需要再更新showError 且请求数 -1
    //   if(loaderState.showError) {
    //     store.commit(LOADER_SET_AJAX_NUM, -1);
    //
    //   }else {
    //     // 否则就是 更新showError 且 需要手动将请求数 -1
    //     store.commit(LOADER_ERROR_SHOWHide, true);
    //   }
    //   break;
    // 请求成功 数据也合理
    case data.code==204:
      m$.template({
        val:data.message,
        time:500
      })
      this.$router.replace("/login/1?perUrl="+this.$route.fullPath);
      break;
    default:
      targetObj.success(data);
      // store.commit(LOADER_SET_AJAX_NUM, -1);
      // 只有所有请求都完毕时 才取消loading
      // !loaderState.ajaxNum && store.commit(LOADER_SHOWHide, false);
      break;
  }
},
  // 请求失败时
  () => {
    m$.template({
      time:1200,
      val:'网络<br>错误'
    })
    return //console.log('请求失败');
    // return store.commit(LOADER_ERROR_SHOWHide, true)
  }
)
}
function getAjax(url,data,fn){
  let newOption={url:myUrl+url,method:'get',params:data,success:fn};
  this.myAjax(newOption)
}
function postAjax(url,data,fn) {
  let newOption={url:myUrl+url,method:'post',body:data,success:fn};
  this.myAjax(newOption)
};
var url={
  payWeixin:'/productorder/payWeixin',
  getWxPayCodeUrl:'/wx/getWxPayCodeUrl',
  login:'/user/login',
  registInWx:'/user/registInWx',
  wxBindAcount:'/user/wxBindAcount',//绑定手机号
  getRegistWxUserAuthUrl:'/wx/getRegistWxUserAuthUrl',//注册微信
  getWxUserShareUrl:'/wx/getWxUserShareUrl',//商品分享
  getShareWxUserAuthUrl:'/wx/getShareWxUserAuthUrl',//商品详情分享new
  getSignedJsTicket:'/wx/getSignedJsTicket',
  payWeixin:'/productorder/payWeixin',
  logout:'/user/logout',
  bindWxAccount:'/wx/bindWxAccount',
  wxAutoLogin:'/wx/wxAutoLogin',
  getWxUserAuthUrl:'/wx/getWxUserAuthUrl',//绑定微信
  regist:'/user/regist',
  resetMobile:'/user/resetMobile',
  resetPassword:'/user/resetPassword',
  resetPassword2:'/user/forgetResetPassword',
  checkCode:'/user/checkResetPasswordAuthCode',
  registAuthCode:'/user/sendRegistAuthCode',
  mobileAuthCode:'/user/sendRestMobileAuthCode',
  passwordAuthCode:'/user/sendRestPasswordAuthCode',
  ckeckOp:'/user/checkOldRestMobileAuthCode',
  ckeckNp:'/user/resetMobile',
  sendOpCode:'/user/sendOldRestMobileAuthCode',
  sendNpCode:'/user/sendRestMobileAuthCode',
  getUserMobile:'/user/getUserMobile',
  my:'/user/getUserInfo',
  isLogged:'/user/isLogged',
  getUserid:'/user/getUid',//获取用户id
  updateHeadIcon:'/user/updateHeadIcon',
  getShareWxUserAuthUrlPlusUserid:'/user/getShareUserPlusUid',//申请积分
  //优惠卷
  couponDetail:'/coupon/getCouponDetail',
  couponCenter:'/coupon/listShopCoupon',
  myCoupon:'/coupon/listUserCoupon',
  decorateApple:'/coupon/issueDCRCoupon',
  getCoupon:'/coupon/issueCoupon',
  //地址管理
  findReceiver:'/receiver/remote/findReceiver',
  deleteReceiver:'/receiver/remote/deleteReceiver',
  updateReceiver: '/receiver/remote/updateReceiver',
  saveReceiver:'/receiver/remote/saveReceiver',
  //省 //s市//区
  getProvince:'/receiver/remote/getProvince',
  getCity:'/receiver/remote/getCity',
  getDistrict:'/receiver/remote/getDistrict',
  //;order
  cancelOrder:'/productorder/cancelOrder',
  getBannerSysList:'/banner/getBannerSysList',
  getBannerShopVo:'/banner/getBannerShopVo',
  getProductGroupDetailShopVoById:'/productgroup/getProductGroupDetailShopVoById',
  //管理装修用户
  decorateUser:'/register/djService',
  getPoints:'/Points/getPointsById',
  //试用中心积分商品
  getIntegralres:'/productgroup/getProductGroupGetShopVo',
  getProductGroupPostShopVo:'/productgroup/getProductGroupPostShopVo',//获取积分商品
  getUserShareTimes:'/user/getUserShareTimes',//获取分享次数
  getSigninStatus:'/Points/getSigninStatus',//检查签到
  updateSigninStatus:'/Points/updateSigninStatus',//签到获取积分
  getRegisterPointsValue:'/Points/getRegisterPointsValue',//检查是否领取注册积分
  getUserRegisterPoints:'/Points/getUserRegisterPoints',//注册领取积分
  toggleCollection:'/collection/toggleCollection',//收藏
  getCollectionStatus:'/collection/getCollectionStatus',//获取收藏状态
  pageCollection:'/collection/pageCollection',//获取收藏商品
  countCollections:'/collection/countCollections',//获取收藏商品总数
  deleteCollections:'/collection/deleteCollections',//删除收藏
  getPromptStatus:'/collection/getPromptStatus',//获取收藏提示状态
  getLogisticsMessage:'/logistics/getLogisticsMessage',//获取订单物流息

  getProductParameters:'/productparametersshop/getProductParameters',//获取产品参数
  getUserInformation:'/user/getUserInformation',//获取用户个人信息
  updateUserInformation:'/user/updateUserInformation',//修改用户个人信息
  getLogisticsMessage:'/logistics/getLogisticsMessage',//获取订单物流息
  authWXRegistLogin:'/wx/authWXRegistLogin',//测试

  resetMobile:'/user/resetMobile',//个人中心绑定手机号
  getCartVoNew:'/cart/getCartVoNew',//购物车
  listUserOrderCoupon: '/coupon/listUserOrderCoupon',//优惠券
};
export default {
  myAjax,
  getAjax,
  postAjax,
  url
};
