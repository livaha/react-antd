import React from 'react'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react';
import echartTheme from '../echartTheme'
// import echarts from 'echarts'
import echarts from 'echarts/lib/echarts'
// 引入饼图和折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
let chart
export default class Line extends React.Component {
    constructor(props){
        super(props)
        this.option4 = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend:{
                data:['OFO订单量','摩拜订单量']
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'OFO订单量',
                    type: 'line',
                    stack: '总量',
                    data: [
                        1200,
                        3000,
                        4500,
                        6000,
                        8000,
                        12000,
                        20000
                    ]
                },
                {
                    name: '摩拜订单量',
                    type: 'line',
                    stack: '总量',
                    data: [
                        1000,
                        2000,
                        5500,
                        6000,
                        8000,
                        10000,
                        12000
                    ]
                },
            ]
        }
    }
    state = {}

    componentWillMount(){
        chart = echarts.init(document.getElementById('root'));
        echarts.registerTheme('Imooc',echartTheme);
    }

    getOption() {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        2000,
                        1200,
                        800
                    ]
                }
            ]
        }
        return option;
    }

    getOption2() {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend:{
                data:['OFO订单量','摩拜订单量']
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'OFO订单量',
                    type: 'line',
                    stack: '总量',
                    data: [
                        1200,
                        3000,
                        4500,
                        6000,
                        8000,
                        12000,
                        20000
                    ]
                },
                {
                    name: '摩拜订单量',
                    type: 'line',
                    stack: '总量',
                    data: [
                        1000,
                        2000,
                        5500,
                        6000,
                        8000,
                        10000,
                        12000
                    ]
                },
            ]
        }
        return option;
    }

    getOption3() {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type:'category',
                boundaryGap: false,
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        2000,
                        1200,
                        800
                    ],
                    areaStyle: {}
                }
            ]
        }
        return option;
    }
    getOption4() {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend:{
                data:['OFO订单量','摩拜订单量']
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    data: [
                        1200,
                        3000,
                        4500,
                        6000,
                        8000,
                        12000,
                        20000
                    ]
                },
                {
                    type: 'category',
                    boundaryGap: true,
                    
                }
            ],
            yAxis: [
                {
                    type: 'value',
                },
                {
                    type: 'value',
                }
            ],
            series: [
                {
                    name: 'OFO订单量',
                    type: 'line',
                    stack: '总量',
                    data: [
                        1200,
                        3000,
                        4500,
                        6000,
                        8000,
                        12000,
                        20000
                    ]
                },
                {
                    name: '摩拜订单量',
                    type: 'line',
                    stack: '总量',
                    data: [
                        1000,
                        2000,
                        5500,
                        6000,
                        8000,
                        10000,
                        12000
                    ]
                },
            ]
        }
     //   let count = 11
     //     setInterval(()=>{
     //         let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
     //         console.log(option.series[0].data)
     //         var data0 = option.series[0].data;
     //         var data1 = option.series[1].data;
     //         data0.shift();
     //         data0.push(Math.round(Math.random() * 1000));
     //         data1.shift();
     //         data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
     //     
     //         option.xAxis[0].data.shift();
     //         option.xAxis[0].data.push(axisData);
     //         option.xAxis[1].data.shift();
     //         option.xAxis[1].data.push(count++);
     //     
     //         chart.setOption(option);
     //         this.forceUpdate()
     //     }, 2100)
        return option;
    }
//  componentDidMount(){
//      let count = 11
//      
//  setInterval(()=>{
//      let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
//      console.log(this.option4.series[0].data)
//      var data0 = this.option4.series[0].data;
//      var data1 = this.option4.series[1].data;
//      data0.shift();
//      data0.push(Math.round(Math.random() * 1000));
//      data1.shift();
//      data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
//  
//      //this.option4.xAxis[0].data.shift();
//      //this.option4.xAxis[0].data.push(axisData);
//      //this.option4.xAxis[1].data.shift();
//      //this.option4.xAxis[1].data.push(count++);
//  
//      chart.setOption(this.option4);
//      this.forceUpdate()
//  }, 2100)
//  }
//  
    render() {
        console.log('s')
        return (
            <div>
            <Card title="折线图表之4" style={{marginTop:10}}>
                <ReactEcharts
                    //option={this.option4}
                    option={this.getOption4()}
                    theme="Imooc"
                    notMerge={true}
                    lazyUpdate={true}
                    style={{
                    height: 500
                }}/>
            </Card>
                <Card title="折线图表之一">
                    <ReactEcharts
                        option={this.getOption()}
                        theme="Imooc"
                        notMerge={true}
                        lazyUpdate={true}
                        style={{
                        height: 500
                    }}/>
                </Card>
                <Card title="折线图表之二" style={{marginTop:10}}>
                    <ReactEcharts
                        option={this.getOption2()}
                        theme="Imooc"
                        notMerge={true}
                        lazyUpdate={true}
                        style={{
                        height: 500
                    }}/>
                </Card>
                <Card title="折线图表之三" style={{marginTop:10}}>
                    <ReactEcharts
                        option={this.getOption3()}
                        theme="Imooc"
                        notMerge={true}
                        lazyUpdate={true}
                        style={{
                        height: 500
                    }}/>
                </Card>
            </div>
        );
    }
}