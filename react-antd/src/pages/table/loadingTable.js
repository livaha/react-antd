import React from 'react';

import { Table, Divider, Tag , Card } from 'antd';
import axios from 'axios'



export default class RowSelection extends React.Component {

    state = {
        data: [],
        pagination: {},
        loading: false,
      };
    
      componentDidMount() {
        this.fetch();
      }
      
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }


    //动态获取mock数据
    fetch = (params = {})=>{
        axios.get({
            baseURL: 'https://randomuser.me/api',
            method: 'get',
            data:{
                results: 10,
                ...params,
            },
            type: 'json',
        }).then((data)=>{
            const pagination = { ...this.state.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState({
              loading: false,
              data: data.results,
              pagination,
            });
        })
    }

/*
  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then((data) => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  }
*/

    render(){
       
    const columns = [{
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        render: name => `${name.first} ${name.last}`,
        width: '20%',
    }, {
        title: 'Gender',
        dataIndex: 'gender',
        filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
        ],
        width: '20%',
    }, {
        title: 'Email',
        dataIndex: 'email',
    }];
            
        
        return (
            <div>
                <Card title="多选">
                <Table
                    columns={columns}
                    rowKey={record => record.login.uuid}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.handleTableChange}
                />
  
                </Card>
            </div>
        )
    }
}