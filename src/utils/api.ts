import { http } from "./http.ts"
//登录页面
const login = function(url:string,params:object):string{
  return http.get(url,params);
}

//注册页面


// 首页轮播图
const getSwipePicApi = () => http.get("product/searchSwipe");

//首页产品
const getProductPicApi = () => http.get("product/searchProduct");

//logo图标
const getLogoApi = () => http.get("product/searchLogo");


export { login, getSwipePicApi, getProductPicApi, getLogoApi }
