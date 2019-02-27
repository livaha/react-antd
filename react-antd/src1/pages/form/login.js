import React from "react"
import {Form, Icon, Input, Button,Card,Checkbox} from 'antd';

class FormLogin extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        //接收到的value是getFieldDecorator下的第一个参数值
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    render() {
        const FormItem = Form.Item;
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登陆行内表单">
                    <Form layout="inline" >
                        <FormItem><Input placeholder="Username"/></FormItem>
                        <FormItem><Input type="password" placeholder="Password"/></FormItem>
                        <Button type="primary">登陆</Button>
                    </Form>
                </Card>

                <Card title="登陆水平表单" style={{marginTop:10}}>
                    <Form onSubmit={this.handleSubmit} layout="horizontal" style={{width:300}}>
                        <FormItem>               
                            {
                                getFieldDecorator('Username', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please input your Username!' 
                                        },
                                        {
                                            min:5,max:10,
                                            message:'长度不在范围内'
                                        },
                                        {
                                            pattern:new RegExp('^\\w+$','g'),
                                            message:'用户名必须为字母或者数字'
                                        }
                                    ],
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="Username"/>
                                )
                            }
                        </FormItem>
                        <FormItem>                            
                            {
                                getFieldDecorator('password', {
                                    rules: [{
                                        required: true, 
                                        message: 'Please input your Password!' 
                                        }],
                                })(
                                    <Input prefix={<Icon type="lock" />} type="password" placeholder="Password"/>
                                )
                            }
                        </FormItem>
                        <Form.Item>
                        {
                            getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )
                        }
                        <a style={{float:"right"}} href="">忘记密码</a>
                        </Form.Item>
                        <Button  htmlType="submit" type="primary">登陆</Button>

                    </Form>

                </Card>
                
            </div>
        );
    }
}
export default Form.create()(FormLogin);


  






