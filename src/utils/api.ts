import { http } from "./http.ts"
//登录页面
const login = function(url:string,params:object):string{
  return http.get(url,params);
}

//注册页面


export { login }