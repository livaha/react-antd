import React from 'react';
import { Table, Divider, Tag , Card } from 'antd';


        
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
    <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
    </span>
    ),
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];

export default class BasicTable extends React.Component {

    state = {

    }
    render(){
        
        return (
            <div>
                <Card title="头部固定">
                <Table 
                bordered  /*边框*/
                columns={columns} /*行表头*/
                dataSource={data}  /*渲染数据*/
                pagination={true} /*是否分页*/
                />
                </Card>
            </div>
        )
    }
}