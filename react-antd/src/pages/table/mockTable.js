import React from 'react';
import { Table, Divider, Tag , Card } from 'antd';
import Axios from 'axios'



export default class BasicTable extends React.Component {

    state = {
        
    }
    componentDidMount(){
        this.request();
    }
    
    request=()=>{
        let baseUrl = 'https://easy-mock.com/mock/5c3b1896d3b9046e1aedbe56/api';
        Axios.get(baseUrl + '/table/list').then((res)=>{
            console.log(JSON.stringify(res));
            //debugger;
            if(res.status == 200 && res.data.code == 0){
                this.setState({data:res.data.result})
            }
        })
    }
    render(){
            
        const columns = [
        {
            title:'id',
            key:'id',
            dataIndex:'id'
        },
        {
            title: '用户名',
            key: 'userName',
            dataIndex: 'userName'
        },
        {
            title: '性别',
            key: 'sex',
            dataIndex: 'sex',
            render(sex){
                return sex ==1 ?'男':'女'
            }
        },
        {
            title: '状态',
            key: 'state',
            dataIndex: 'state',
            render(state){
                let config  = {
                    '1':'咸鱼一条',
                    '2':'风华浪子',
                    '3':'北大才子',
                    '4':'百度FE',
                    '5':'创业者'
                }
                return config[state];
            }
        },
        {
            title: '爱好',
            key: 'interest',
            dataIndex: 'interest',
            render(abc) {
                let config = {
                    '1': '游泳',
                    '2': '打篮球',
                    '3': '踢足球',
                    '4': '跑步',
                    '5': '爬山',
                    '6': '骑行',
                    '7': '桌球',
                    '8': '麦霸'
                }
                return config[abc];
            }
        },
        {
            title: '生日',
            key: 'birthday',
            dataIndex: 'birthday'
        },
        {
            title: '地址',
            key: 'address',
            dataIndex: 'address'
        },
        {
            title: '早起时间',
            key: 'time',
            dataIndex: 'time'
        }
    ]


        return (
            <div>
                <Card title="状态数据渲染--Mock">
                <Table 
                bordered  /*边框*/
                columns={columns} /*行表头*/
                dataSource={this.state.data}  /*渲染数据*/
                pagination={true} /*是否分页*/
                />
                </Card>
            </div>
        )
    }
}