const baseUrl:string = "http://10.31.162.36:8088/api/";
//对象拼接写法
interface kind{
  [proppName:string]:any;
  [proppName:number]:any;
}
const  format = function(data:kind):string{
  let result='';
  for(const key of Object.keys(data)) {
    if(data.hasOwnProperty(key)) {
      result += "&"+key + "="+ data[key];
    }
  }
  result = result.slice(1,);
  return result;
}
interface httpType{
  [proppName:string]:any,
  [proppName:number]:any,
}
const http:httpType = {
   get(url:string,params:object):any{
    //整理数据
    let body:string ="";
    // 判断传入的数据是否为空
    if(params){
      if(Object.keys(params).length != 0){
          body = format(params);
      }
    }else{
      body="";
    }
    // return body;
    // 拼接需要请求的路径
    let path = baseUrl+url +body;
    let answer = [];
    return fetch(path)
        .then(response=>response.json())
        .then(res=>{
          // console.log(res);
            return res.result;
          });
  },
  post(url:string,params:object):any{
    //处理对象的数据
    //"user/loginAdmin"
    //整理传过来的数据
    //整理数据
    let body="";
    //判断传入的数据是否为空
    if(params != {}){
       body = format(params);
    }
    //拼接需要请求的路径
    let path = baseUrl+url +body;
    const data= format(params);
    return fetch(baseUrl+url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:data
        }).then(res=>res.json())
        .then(res=>{
          return res;
          // if(res.status ==0){
          //   return res;
          // }
          // else {
          //   return res;
          // }
          // console.log(res);
        })
  }
}
export { http }; 