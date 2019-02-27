import React from 'react';
import { Card, Button, Table, Form, Select, Modal, message } from 'antd';
import axios from '@/axios/index';
import Utils from '@/utils/utils';
const FormItem = Form.Item;
const Option = Select.Option;

export default class City extends React.Component{

    state={
        //初始化数据，不然在没有数据渲染的情况下会出错 
        list:[],
        isShowOpenCity:false
    }
    params={page:1}
    componentDidMount(){
        //发送数据请求来渲染列表
        this.requestList();
    }

    //默认请求我们的接口数据
    requestList=()=>{
        let _this = this; 
        axios.ajax({
            url:'/open_city',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            //.map是为了给列表中每个值加key，消除警告  ,列表返回的result为数组类型
            let list = res.result.item_list.map((item,index)=>{
                item.key = index;
                return item;
            });
            this.setState({
                list:list,
                pagination:Utils.pagination(res,(current)=>{
                    _this.params.page = current;
                    _this.requestList();
                })
            })
        })
    }

    //开通城市/弹窗
    handleOpenCity=()=>{
        this.setState({
            isShowOpenCity:true
        })
    }
    //城市开通提交
    handleSubmit=()=>{
        //cityForm的值就是通过wrappedCompenentRef存进来的
        let cityInfo = this.cityForm.props.form.getFieldsValue();
        //通过调试去看下值对不对
        console.log(cityInfo);
        //将form的值进行提交
        axios.ajax({
            url:'/city/open',
            data:{
                params:cityInfo
            }
        }).then((res)=>{
            if(res.code == '0'){
                message.success('开通成功');
                this.setState({
                    isShowOpenCity:false
                })
                //提交数据后，重新请求列表
                this.requestList();
            }
        })
    }
    render(){
        const columns = [
            {
                title:"城市ID",
                dataIndex:"id"
            },{
                title:"city name",
                dataIndex:'name'
            },{
                title:'use mode',
                dataIndex:'mode',
                render(mode){
                    return mode ==1?'停车点':'禁停区';
                }
            },{
                title:'运营模式',
                dataIndex: 'op_mode',
                render(op_mode) {
                    return op_mode == 1 ? '自营' : '加盟';
                }
            },{
                title: '授权加盟商',
                dataIndex: 'franchisee_name'

            }, {
                title: '城市管理员',
                dataIndex: 'city_admins',
                render(arr){
                    return arr.map((item)=>{
                        return item.user_name;
                    }).join(',');
                }
            }, {
                title: '城市开通时间',
                dataIndex: 'open_time'
            }, {
                title: '操作时间',
                dataIndex: 'update_time',
                render: Utils.formateDate
            }, {
                title: '操作人',
                dataIndex: 'sys_user_name'
            }

        ]
        return(
            <div>
                {/**每一个单独提交的地方都给它create一个对象，随后将它封装在antd的Form.create中 */}
                <Card>
                    <FilterForm />
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns = {columns}
                        dataSource={this.state.list} //数据源
                        pagination={this.state.pagination} //分页
                    />
                </div>
                <Modal
                    title="开通城市"
                    visible={this.state.isShowOpenCity}
                    onCancel={()=>{
                        this.setState({
                            isShowOpenCity:false
                        })
                    }}
                    onOk={this.handleSubmit}
                >
                {/**通过wrappedCompenentRef来接收，相当于ref， 里面接收一个回调方法，将cityForm保存到this作用发域里面
                通过this.cityForm取到对象，this.cityForm.props取到对象属性，再.form.getFieldsValue取得form值 */}
                    <OpenCityForm wrappedComponentRef={(inst)=>{this.cityForm = inst;}} />
                </Modal>
            </div>
        )
    }

}


class FilterForm extends React.Component{
    render(){
        const {getFieldDecorator} = this.props.form; //固定语法，获取放入表单中的值
        return(
            <Form layout="inline">
                <FormItem label="城市">
                {
                    getFieldDecorator('city_id')(
                        //上面是它的表单value提交的值'city_id'，下面是渲染的标签
                        <Select style={{width:100}} placeholder="全部">
                            <Option value="">全部</Option>
                            <Option value="1">北京市</Option>
                            <Option value="2">天津市</Option>
                            <Option value="3">深圳市</Option>
                        </Select>
                    )
                }
                </FormItem>
                <FormItem label="用车模式">
                    {
                        getFieldDecorator('mode')(
                            <Select
                                style={{ width: 120 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">指定停车点模式</Option>
                                <Option value="2">禁停区模式</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                style={{ width: 80 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    {
                        getFieldDecorator('auth_status')(
                            <Select
                                style={{ width: 100 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">已授权</Option>
                                <Option value="2">未授权</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        )
    }
}

FilterForm = Form.create({})(FilterForm)


class OpenCityForm extends React.Component{
    render(){
        const formItemLayout = {
            labelCol:{
                span:5
            },
            wrapperCol:{
                span:19
            }
        }
        //固定语法，
        const {getFieldDecorator} = this.props.form;
        return(
            <Form layout="horizontal">
                <FormItem label="选择城市" {...formItemLayout}>
                    {
                        getFieldDecorator('city_id',{
                            initialValue:'1'
                        })(
                            <Select style={{width:100}}>
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式" {...formItemLayout}>
                    {
                        getFieldDecorator('op_mode', {
                            initialValue: '1'
                        })(
                            <Select style={{ width: 100 }}>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="用车模式" {...formItemLayout}>
                    {
                        getFieldDecorator('use_mode', {
                            initialValue: '1'
                        })(
                            <Select style={{ width: 100 }}>
                                <Option value="1">指定停车点</Option>
                                <Option value="2">禁停区</Option>
                            </Select>
                        )
                    }
                </FormItem>
            </Form>
        )
    }
}

OpenCityForm = Form.create({})(OpenCityForm)


/**Select为例
 * 1 通过Form.create来创建
 * 2 创建完antd会自动帮我们封装成表单
 * 3 然后我们把每个表单定义到getFieldDecorator里面去，它会自动帮我们处理双向绑定的功能
 *   当我们选择完后它会自动把值保存进去
 * 4 然后通过wrappedCompenentRef来保存我们ref这种对象cityInfo
 * 5 然后通过对象获取form里面的getFieldsValue值
 * 6 然后将值进行提交
 * 7 示例为<Modal>标签里面的数据流程
 */