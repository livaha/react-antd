import JsonP from 'jsonp'
export default class Axios{
    /*将第三方插件再封装 */
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                /*跨域接收，参数为callback */
                param:'callback'
            },function(err,response){
                //debugger;
                if(response.status == 'success'){
                    resolve(response);
                }
                else{
                    reject(response.message);
                }
            })
        })
    }
}