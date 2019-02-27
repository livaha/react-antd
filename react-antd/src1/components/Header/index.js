import React from 'react';
import {Row,Col} from 'antd';
import Util from '@/utils/utils'
import './index.less'
import Axios from '@/axios';

export default class Header extends React.Component{
    state = {
    }
    componentWillMount(){
        this.setState({
            userName:'admin'
        })
        /*定时显示时钟 formateDate（参数=时间戳）*/
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
            
        },1000)

        /*调用天气接口 */
        this.getWeatherAPIDate();
    }
    getWeatherAPIDate(){
        /*百度API接口 + jsonp封装的函数return的promise*/
        let city='北京';
        Axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            /*通过.then来接收 jsonp封装的函数的Promise的返回值 */
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }

    render(){
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=""/>
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}