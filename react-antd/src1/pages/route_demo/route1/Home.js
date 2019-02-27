import React from 'react'
import {HashRouter, Route , Link , Switch} from 'react-router-dom'
import Main from './Main'
import Topic from './Topic'
import About from './About'

export default class Home extends React.Component{

    render(){
        return(
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topic</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact={true} path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}





