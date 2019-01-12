import React from 'react';
import {Row,Col} from 'antd';
import './index.less'

export default class Header extends React.Component{
    state = {}
    componentWillMount(){
        this.setState({
            userName:'admin'
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
                        <span className="date">
                            时间
                        </span>
                        <span className="weather-img">
                            <img src=""/>
                        </span>
                        <span className="weather-detail">
                            天气
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}