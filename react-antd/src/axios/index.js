import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
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

    static ajax_get(options){
        let baseApi = 'https://easy-mock.com/mock/5c3b1896d3b9046e1aedbe56/api';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params:(options.data && options.data.params) || ''
            }).then((response)=>{
                if(response.status == '200'){
                    let res = response.data;
                    if(res.code == '0'){
                        resolve(res);
                    }else{
                        Modal.info({
                            title:"提示",
                            content:res.message || '返回数据错误'
                        })
                    }
                }else{
                    reject(response);
                }
            })
        })
    }

    
    static ajax_post(options){
        let baseApi = 'https://easy-mock.com/mock/5c3b1896d3b9046e1aedbe56/api';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'post',
                baseURL:baseApi,
                timeout:5000,
                data: options.data
            }).then((response)=>{
                if(response.status == '200'){
                    let res = response.data;
                    if(res.code == '0'){
                        resolve(res);
                    }else{
                        //debugger
                        Modal.info({
                            title:"提示",
                            content:(res.message) || '返回数据错误'
                        })
                    }
                }else{
                    reject(response);
                }
            })
        })
    }
}