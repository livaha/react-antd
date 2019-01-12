# react-router-dom

### 核心概念及用法介绍

+ react-router
+ react-router-dom
+ react-router-dom核心用法

##### react-router和react-router-dom理解

+ 4.0版本中已不需要路由配置，一切皆组件
+ react-router:提供了一些router的核心api,包括Router,Route,Switch等 
+ react-router-dom：提供了BrowserRouter,HashRouter,Route,Link,NavLink

##### 路由模块安装 

~~~
yarn add react-router-dom
~~~

##### react-router-dom核心用法

- 1. HashRouter和BrowserRouter

  ~~~
  http://localhost:3000/#/admin/buttons       ------ HashRouter
  http://localhost:3000/admin/buttons         ------ BrowserRouter
  ~~~

- 2. Route :  path , exact , component , render

Route 用法 

一般用法：

~~~
<Route path='/admin/ui/buttons' component={Buttons} />
<Route path='/admin/ui/modals' component={Modals} />
<Route path='/admin/ui/loading' component={Loading} />
~~~

嵌套用法：

~~~
<Route path="/admin" render={()=>
	<Route path='/admin/home' component={Home} />
}
~~~

+ 3. NavLink,  Link

~~~
import {Link} from 'react-router-dom'
const Header = ()=>(
	<ul>
		<li><Link to='/'>Home</li>
		<li><Link to='/about'>about</li>
		<li><Link to='/three'>three</li>
	</ul>
)
~~~

带参数的：

~~~
<Link to={{pathname:'/three/7'}}Three #7</Link>
定义：<Route path='/three/:number' />
取值：this.props.match.params.number(参数)
~~~

~~~
一个基本的location对象 ：
{pathname:'/',search:'',hash:'',key:'abc123' state:{}}
~~~

- 4. Switch

Switch会匹配到第一个符合的路由后跳出，对Switch里面的其他路由不作判断

~~~
<Switch>
	<Route path='/admin/ui/buttons' component={Buttons} />
  <Route path='/admin/ui/modals' component={Modals} />
  <Route path='/admin/ui/loading' component={Loading} />
 </Switch>
~~~

- 5. Redirect

~~~
路由重定向：<Redirect to="/admin/home"/>
~~~

#### demo目录结构 

~~~
+-- src/                                    ---核心代码目录
|   +-- pages                          ---测试demo
|   |    +-- demo                      ---生命周期测试demo
|   |    |    --- ...   
|   |    +-- route_demo                      ---react-router-dom测试demo
|   |    |    --- route1                     --- 一般路由写法
|   |    |    --- route2         --- 路由与DOM分开，功能与route1一样（可对比route1)
|   |    |    --- route3                     ---嵌套路由
|   |    |    --- route4                     ---动态路由/路由参数
|   +-- index.js                         ---渲染入口
~~~

index.js引入demo的入口文件即可yarn start

~~~jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './page/route_demo/route4/router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

~~~



#### 警告

```
错误：Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack
```

原因：这个是 reactr-router 的一个提示，当前路由下的 history 不能 push 相同的路径到 stack 里。只有开发环境存在，生产环境不存在，目前还没看到官方有去掉的意思。看不惯的话可以采取一些方法关掉这个提示。

```
<Link to={{ pathname: "/app/studyMapModule/detail" }} replace>detail</Link> 
```

 或者：

```
The warning is there just to let you know that when you're using hash history, you can't actually PUSH the same path; the browser won't add anything to the history stack.

But you should only get this warning in development. If you generate your production build correctly (using NODE_ENV=production) you shouldn't see this warning in production.
```

 

#### React this.props.children

this.props对象的属性与组件的属性一一对应，但是有一个例外，就是`this.props.children`属性。它表示组件的所有子节点。

```
var  NotesList = React.createClass({
    render(){
        return (
            <ol>
                {
                    React.Children.map(this.props.children,function(child){
                        return <li>{child}</li>;
                    })
                }
            </ol>
        )
    }
})

ReactDOM.render(
    <NotesList>
        <span>{hello}</span>
        <span>{world}</span>
    </NotesList>,
    document.body
)
//输出：
       hello
       world
```

上面代码的`NotesList`组件有两个`span`子节点，他们都可以通过`this.props.children`读取。

这里需要注意，`this.props.children`的值有三种可能：如果当前组件没有子节点，它就是`undefined`;如果有一个子节点，数据类型是`Object`;如果有多个子节点，数据类型就是`array`。所以，处理`this.props.children`的时候要小心。

React提供一个工具方法`React.Children`来处理`this.props.children`。我们可以用`React.Children.map`来遍历子节点，而不用担心`this.props.children`的数据类型是`undefined`还是`object`。



#### 动态路由（获取路由参数）

~~~
//router.js
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
~~~

~~~
//Main组件
import React from 'react'
import { Link } from 'react-router-dom'
export default class Main extends React.Component {

    render() {
        return (
            <div>
                this is main page.
                <Link to="/main/123">嵌套路由1</Link><br/>
                <Link to="/main/456">嵌套路由2</Link><br/>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}
~~~

~~~
//Info组件
export default class Info extends React.Component {

    render() {
        return (
            <div>
                测试动态路由；
                动态路由值为：{this.props.match.params.value}
            </div>
        );
    }
}
~~~

