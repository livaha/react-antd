import React from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Main from './Main'
import Topic from '../route1/Topic'
import About from '../route1/About'
import Home from './Home'
import Info from './Info'
import NoMatch from './NoMatch'
export default class IRouter extends React.Component{

    render(){
        return (
            <Router>
                <Home>
                    <Switch>
                        {/*如果不用Switch的话，会一直往下匹配，而Switch会break跳出 */}
                        <Route path="/main" render={()=>(
                            <Main>
                                <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        )}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route exact={true} path="/about/abc" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        );
    }
}