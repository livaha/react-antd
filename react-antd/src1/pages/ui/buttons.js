import React from 'react'
import {Card,Button,Radio,Icon} from 'antd'
import './ui.less'

export default class Buttons extends React.Component {

    state = {
        loading: true,
        iconLoading: true,
        size:'default'
    }
    handleCloseLoading = () => {
        this.setState({ 
            loading: false ,
            iconLoading:false}
        );
    }

    handleChange = (e)=>{
        this.setState({
            size:e.target.value
        })
    }



    render() {
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>                
                </Card>
                <Card title="图形按钮" className="card-wrap">                
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>    
                    <Button shape="circle" icon="search" />
                    <Button type="primary" shape="circle" icon="download" />                 
                </Card>
                <Card title="Loading按钮" className="card-wrap">                      
                    <Button type="primary" loading={this.state.loading}>Loading</Button>
                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                    Click me!
                    </Button>
                    <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.handleCloseLoading}>
                    Click me!
                    </Button>
                    <Button shape="circle" loading={this.state.loading} />
                    <Button type="primary" shape="circle" loading={this.state.loading} />
                    <Button type="primary" onClick={this.handleCloseLoading}>Close</Button>
                </Card>
                <Card title="按钮组"  style={{marginBottom:10}}>
                    <Button.Group>
                        <Button type="primary"><Icon type="left" />Backward</Button>
                        <Button type="primary">Forward<Icon type="right" /></Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸">

                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group> 
                    
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                    <Button type="dashed" size={this.state.size}>Imooc</Button>
                    <Button type="danger" size={this.state.size}>Imooc</Button>

                </Card>
            </div>
        );
    }
}