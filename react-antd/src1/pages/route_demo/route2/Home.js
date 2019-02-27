import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component{

    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topic</Link></li>
                </ul>
                <hr/>
                {/*相当于直接把子路由的组件放到下面这个位置（跟route1目录功能是一样的） */}
                {this.props.children}
            </div>
        )
    }
}





