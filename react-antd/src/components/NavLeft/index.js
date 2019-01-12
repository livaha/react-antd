import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import MenuConfig from '@/config/menuConfig';
import './index.less'
const SubMenu = Menu.SubMenu;


export default class NavLeft extends React.Component{

    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            /*所有变量，组件的变化，都要通过setState来保存，一旦调用了setState，就会调用
            render来渲染，当然根据生命周期函数，调用另外的三个更新函数也会调用render */
            menuTreeNode
        })
    }

    state = {
    }
    //菜单渲染   data就是MenuConfig.js的菜单列表
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){//如果有子菜单
                return(
                    <SubMenu key={item.key} title={item.title}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                
                <Menu.Item key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
            )
        })
    }

    render(){
        return(
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>TOTOLINK AC</h1>
                </div>    
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                >                
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        )
    }
}