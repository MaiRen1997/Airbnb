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
//添加购物车
const addcartApi = (params:object) => http.post("product/addorder",params);
//logo图标
const getLogoApi = () => http.get("product/searchLogo");

// 全部订单
const getAllOrderApi = () => http.get("product/serchall");

// 待付款订单
const getWaitOrderApi = () => http.get("product/serch");

// 未发货订单
const getWaitSendApi = () => http.get("product/serchdelive");

// 待收货订单
const getWaitTakeApi = () => http.get("product/serchdbuy");
//删除购物车
const delatecartApi = (params:object) => http.post("product/delate",params);

// 添加评论
const addCommandApi = (params:object) => http.post("product/addcommand",params);
//查看评论
const getCommandApi = () => http.get("product/serchcommand");

//利用手机号查看用户
const serachuserApi = (params:object) => http.post("user/searchUserId",params);



export { get_list_itemApi, getSwipePicApi, getProductPicApi, getLogoApi,loginInApi, get_list_detailApi, resignApi, loginUserApi, updateUserApi, loginPhoneApi ,getProductdetailApi, addcartApi, getAllOrderApi, getWaitOrderApi,getWaitSendApi,getWaitTakeApi,delatecartApi,addCommandApi, getCommandApi,serachuserApi}
