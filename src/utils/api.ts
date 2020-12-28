import { http } from "./http.ts"
//登录页面
const loginInApi = (params:object):string =>http.post ("user/loginAdmin",params);

//网页数据页面
const get_list_itemApi = (params:object):string => http.get ("product//serchclass",params); 
//获取分类页商品详情
const get_list_detailApi = (params:object):string => http.post ("product/searchProductbyclass",params); 

//注册页面 
const resignApi = (params:object):string => http.post ("user/addUser",params); 
// 首页轮播图
const getSwipePicApi = () => http.get("product/searchSwipe");

//首页产品
const getProductPicApi = (params:object) => http.post("product/searchProduct",params);

//logo图标
const getLogoApi = () => http.get("product/searchLogo");


export { get_list_itemApi, getSwipePicApi, getProductPicApi, getLogoApi,loginInApi, get_list_detailApi, resignApi }
