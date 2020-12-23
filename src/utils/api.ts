import { http } from "./http.ts"

const login = function(url:string,params:object){
  return (http.get(url,params));
}

export { login }