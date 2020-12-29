import { http } from "./http.ts"
//管理员页面
const loginInApi = (params:object):string =>http.post ("user/loginAdmin",params);
//登录普通用户界面
const loginUserApi = (params:object):string =>http.post ("user/loginUser",params);
//重设密码
const updateUserApi = (params:object):string =>http.post ("user/updataUser",params);
//注册页面 
const resignApi = (params:object):string => http.post ("user/addUser",params);
//手机登录页面 
const loginPhoneApi = (params:object):string => http.post ("user/loginUserphone",params); 

//网页数据页面
const get_list_itemApi = (params:object):string => http.get ("product//serchclass",params); 
//获取分类页商品详情
const get_list_detailApi = (params:object):string => http.post ("product/searchProductbyclass",params); 

// 首页轮播图
const getSwipePicApi = () => http.get("product/searchSwipe");

//首页产品
const getProductPicApi = (params:object) => http.post("product/searchProduct",params);
//商品详情
const getProductdetailApi = (params:object) => http.post("product/searchProductdetailId",params);

//logo图标
const getLogoApi = () => http.get("product/searchLogo");

export { get_list_itemApi, getSwipePicApi, getProductPicApi, getLogoApi,loginInApi, get_list_detailApi, resignApi, loginUserApi, updateUserApi, loginPhoneApi ,getProductdetailApi}
