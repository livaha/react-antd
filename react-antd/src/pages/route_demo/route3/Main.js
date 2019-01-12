import React from 'react'
import {Link} from 'react-router-dom'

export default class Main extends React.Component {
    render() {
        return (
            <div>
                this is Main page.
                <Link to="/main/about" replace>嵌套路由</Link>
                <hr/>
                {/*就是把我自个组件下的子组件都放到下面，如果有路由组件，就可以找到它啦*/}
                {this.props.children}
            </div>
        );
    }
}