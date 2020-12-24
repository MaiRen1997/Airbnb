import { http } from "./http.ts"
//登录页面
const loginInApi = (params:object):string =>http.post ("user/loginAdmin",params);

//网页数据页面
const login = (params:object):string => http.get ("product/searchProduct",params); 
// const login = function(url:string,params:object):string{
//   return http.get(url,params);
// }

//注册页面 


export { login, loginInApi }