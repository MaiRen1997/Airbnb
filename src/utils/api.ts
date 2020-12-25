import { http } from "./http.ts"
//登录页面
const loginInApi = (params:object):string =>http.post ("user/loginAdmin",params);

//网页数据页面
const login = (params:object):string => http.get ("product/searchProduct",params); 
// const login = function(url:string,params:object):string{
//   return http.get(url,params);
// }

//注册页面 

// 首页轮播图
const getSwipePicApi = () => http.get("product/searchSwipe");

//首页产品
const getProductPicApi = (params:object) => http.post("product/searchProduct",params);

//logo图标
const getLogoApi = () => http.get("product/searchLogo");


export { login, getSwipePicApi, getProductPicApi, getLogoApi }
