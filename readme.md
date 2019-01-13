# React全家桶+AntD单车后台管理系统开发

#### React 全家桶

- React基础知识、生命周期
- Router4.0语法讲解
- Redux集成开发

#### AntD UI组件

- 最实用的基础组件
- AntD栅格系统
- ETable组件封装
- BaseForm组件封装 ----
- 表格内嵌单选、复选封装

#### 公共机制封闭

- Axios请求插件封闭
- API封装
- 错误拦截
- 权限、菜单封装
- 日期、金额、手机号封装
- Loading、分页、Mock...

#### 项目整体架构

[![1547120255663](https://github.com/sbwxffnhc/react-antd/raw/master/assets/1547120255663.png)](https://github.com/sbwxffnhc/react-antd/blob/master/assets/1547120255663.png)

#### 生态介绍

- Vue生态：Vue + Vue-Router + Vuex + Axios + Babel + Webpack ...
- React生态：React + React-Router + Redux + Axios + Babel + Webpack ...

Redux : 没有关系间的组件间通信

编程式实现：需要以具体代码表达在哪里，做什么，如何实现

声明式实现： 只需要声明在哪里，做什么，无需关心如何实现

## React脚手架、Yarn介绍

- #### 如何安装和使用React脚手架

```
npm 官网： https://facebook.github.io/create-react-app/docs/getting-started
官网 ： https://reactjs.org/docs/create-a-new-react-app.html

npm i -g create-react-app my-app
create-react-app my-app
cd my-app
npm start

官网新使用：
npx create-react-app my-app
cd my-app
npm start
```

- #### Yarn

```
使用方法： https://yarn.bootcss.com/docs/usage/
```

##### 什么是Yarn

- Yarn是新的一代包管理工具

##### 为什么使用Yarn

- 速度快
- 安装版本统一，更安全 *Yarn可以把版本锁定，使项目的版本统一*
- 更简洁的输出
- 更好的语义化

##### 如何使用Yarn

- yarn init 初始化项目
- yarn add 安装一个包
- yarn remove 删除一个包
- yarn / yarn install 安装项目依赖

##### react脚手架与webpack

react脚手架已经把webpack封装起来了，我们只需要关注code实现就行了

如果需要改webpack，就需要通过`eject`来暴露出webpack

## 项目安装的依赖：

```
yarn add react-router
```

## 目录结构

```
+-- build/                                  ---打包的文件目录
+-- config/                                 ---npm run eject 后的配置文件
|   --- webpack.config.js                   ---开发、上线的配置
|   --- webpackDevServer.config.js          ---本地服务的配置文件 ，如端口，IP（我们不需要管）
+-- script/                                 ---暴露出来的脚本，可以在package.json里面的scripts里面看到（不需要修改）
+-- ...
目录
+-- node_modules/                           ---npm下载文件目录
+-- public/                                 
|   --- index.html							---首页入口html文件
+-- src/                                    ---核心代码目录
|   +-- admin.js                          ---主结构和代码
|   +-- config                          ---菜单配置，及其他变量配置
|   +-- components                         ---组件
|   |    +--                       ---
|   +-- pages                          ---测试demo
|   |    +-- demo                      ---生命周期测试demo
|   |    |    --- ...   
|   |    +-- route_demo                      ---react-router-dom测试demo
|   |    |    --- route1                     --- 一般路由写法
|   |    |    --- route2         --- 路由与DOM分开，功能与route1一样（可对比route1)
|   |    |    --- route3                     ---嵌套路由
|   |    |    --- route4                     ---动态路由
|   |    +-- dashboard                      ---首页组件
|   |    |    --- ...   
|   |    +-- forms                          ---表单组件
|   |    |    --- ...   
|   |    +--                           ---页面组件
|   |    |    --- ...   
|   |    +-- tables                         ---表格组件
|   |    |    --- ...   
|   |    +-- ui                             ---ui组件
|   |    |    --- ...   
|   |    --- BreadcrumbCustom.jsx           ---面包屑组件
|   |    --- HeaderCustom.jsx               ---顶部导航组件
|   |    --- Page.jsx                       ---页面容器
|   |    --- SiderCustom.jsx                ---左边菜单组件
|   +-- style                               ---项目的样式存放目录，主要采用less编写
|   +-- utils                               ---工具文件存放目录
|   --- App.js                              ---组件入口文件
|   --- index.js                            ---项目的整体js入口文件，包括路由配置等
--- .env                                    ---启动项目自定义端口配置文件
--- .eslintrc                               ---自定义eslint配置文件，包括增加的react jsx语法限制
--- package.json                                    
```

## React生命周期介绍

基础介绍请看本目录的文件《React生命周期.md》

在项目中的代码示例：

src/index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactLife from './page/demo/ReactLife';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ReactLife />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

src/page/demo/ReactLife.js

```javascript
/*生命周期函数测试
实现：通过点击按钮改变state值
ReactLife给Child传参数

知识点：
1.看它俩的this及箭头函数的使用方法
   onClick={this.handleAdd} ---  handleAdd=()=>{箭头函数的this是组件的实例}
   onClick={this.handleClick.bind(this)} ---  handleClick(){这个非箭头函数的this不是组件的实例，
    所以在调用的时候要用到.bind(this)}
   

 */
import React from 'react'
import Child from './Child'

export default class ReactLife extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }
    //state={count:0};//用这个来代替constructor构造函数也是可以的

    handleAdd=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handleClick(){
        this.setState({
            count:this.state.count+1
        })
    }

    render(){
        let style = {padding:20}
        return (
            <div style={style}>
                <p>React生命周期介绍</p>
                <button onClick={this.handleAdd}>点击一下</button>
                <button onClick={this.handleClick.bind(this)}>点击一下</button>
                <p>{this.state.count}</p>
                
                <Child name={this.state.count} />
            </div>
        )
    }
}
```

/src/pages/demo/Child.js

```javascript
/*ReactLife组件给Child组件传参数
生命周期：
开始时会调用 componentWillMount，componentDidMount
只要调用了setState改变state后，就会给组件传值 ，调用componentWillReceiveProps
随后会接着调用三个update: shouldComponentUpdate , componentWillUpdate ,componentDidUpdate
*/
import React from 'react'

export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }
    componentWillMount(){
        console.log('will mount');
    }
    componentDidMount(){        
        console.log('did mount');
    }
    componentWillReceiveProps(newProps){
        //接收从其他组件传过来的参数
        console.log('will props ： '+ newProps.name);
    }
    shouldComponentUpdate(){
        //它是一旦调用setState就会更新的一个API方法
        //默认return true,  如果return false,下面的就不走了
        console.log('should update')
        return true;
    }
    componentWillUpdate(){
        console.log('will update')        
    }
    componentDidUpdate(){
        console.log('did update')        
    }

    render(){
        return (
            <div>
                <p>这里是子组件，测试子组件的生命周期</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
```

页面显示：[![1547129343237](https://github.com/sbwxffnhc/react-antd/raw/master/assets/1547129343237.png)](https://github.com/sbwxffnhc/react-antd/blob/master/assets/1547129343237.png)

点击按钮后的打印信息：

开始打印前面两个mount, 点击按键后（调用了setState,改变了state值）调用了后4个

[![1547129182737](https://github.com/sbwxffnhc/react-antd/raw/master/assets/1547129182737.png)](https://github.com/sbwxffnhc/react-antd/blob/master/assets/1547129182737.png)

## 项目主页工程搭建

#### 1. 基础插件安装，Less文件加载配置

antd 这个UI组件用的是less，编译完后才会生成固定的css文件用来发布，所以我们需要用webpack来加载less

```
安装React-Router,Axios
安装AntD
暴露webpack配置文件
安装less-loader
修改less-loader
```

##### 1.1安装包：

```
yarn add react-router-dom axios less-loader
```

##### 1.2 暴露webpack插件：

```
yarn eject
```

##### 1.3 暴露出来的目录结构 ：

```
+-- config/                           ---npm run eject 后的配置文件
|   --- webpack.config.js             ---开发、上线的配置
|   --- webpackDevServer.config.js    ---本地服务的配置文件 ，如端口，IP（我们不需要管）
|   --- ...
+-- script/                           ---暴露出来的脚本，可以在package.json里面的scripts里面看到（不需要修改）
```

##### 1.4 新版webpack中增添对less的支持

具体实现请参考教程：

```
https://juejin.im/post/5c3964986fb9a049b41cb040
```



webpack是从下往上一个一个来执行的，

通过'less-loader'，再通过'postcss-loader'，最后是'css-loader'来将less转换为css

```
实现按需加载：babel-plugin-import
配置文件不动，在暴露的文件中的js中加个插件
```

#### 2. 项目主页结构开发

##### 主页结构定义

- 页面结构定义
- 目录结构定义
- 栅格系统使用

------

- 利用栅格系统来布局分层

 我们用的是Antd的栅格：<https://ant.design/components/grid-cn/>

- 菜单配置：一般来说菜单权限配置是由服务端返回的数据进行权限匹配的，而现在我们先是前端控制 --- > 通过服务端接口返回权限列表，在前端用递归的方式实现菜单的渲染

菜单配置放在config文件夹中的menuConfig.js

- 修改webpack..config.js里面alias配置，使指定路径名src全局路径的别名

```javascript
      alias: {
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        'react-native': 'react-native-web',
        // 全局相对路径别名，处理相对路径过长和繁琐问题
        '@': paths.appSrc
      },
```

#### 3. 菜单组件开发

#### 4. 头部组件开发

jsonp获取跨域：获取百度的天气

axios不能跨域，只会是用get,post

```

```

#### 5. 底部组件开发

## 路由

路由的基本知识 请看文档《react-router-dom.md》

这里主要写项目中的路由

```
因为会有多个路由，根路由也会有同级路由，如/login, / , /main/，所以 需要有一个组件来囊括这些路由，这里的<App/>组件就有这个作用
```

~~~
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;

~~~





## UI组件使用



## AntD Form组件

主要是登陆、注册页面

~~~
获取getFieldDecorator：
const ｛getFieldDecorator｝ = this.props.form;   -- 固定语法，创建语法后通过这个就可以来获取

getFieldDecorator作用：帮助我们做表单封装
~~~

具体可以在antd官网form表单中看到用法：https://ant.design/components/form-cn/#components-form-demo-validate-other





## 重要知识点

#### onClick事件

```
不当：<button onClick={this.handleOpen('params')}></button>  这样子会直接调用这个函数的
正确：<button onClick={('params')=>this.handleOpen}></button>  匿名函数传参不会主动调用
```

#### [type]:true

[type]：会把type当成变量

```
<button onClick={('param1')=>this.handleOpen}></button>  
<button onClick={('param2')=>this.handleOpen}></button>  
<button onClick={('param3')=>this.handleOpen}></button>  
<button onClick={('param4')=>this.handleOpen}></button>  

state={
    param1:false,
    param2:false,
    param3:false,
    param4:false,
}

handleOpen = (type)=>{
    this.setState({
        [type]:true
    })
    
    /*下面这种用if判断的方法很笨
    if(type=='1'){
        this.setState({
            param1:true
        })
    }....
    */
}
```

#### yarn add less@^2.7.3

```
yarn add less@^2.7.3    '^'表示只要是>2,<3的大版本都可以升级
```

#### import {xxx} from '@/action';

```
import {fetchData,receiveData} from '@/action';
```

from?'/@action'的?‘@’是指向哪里的呢

答：webpack里面alias配置的?一般路径是src

[![1547274877055](https://github.com/sbwxffnhc/react-antd/raw/master/assets/1547274877055.png)](https://github.com/sbwxffnhc/react-antd/blob/master/assets/1547274877055.png)

#### encode编码

```
encodeURIComponent('北京')
```

控制台输出 ：

[![1547283087762](https://github.com/sbwxffnhc/react-antd/raw/master/assets/1547283087762.png)](https://github.com/sbwxffnhc/react-antd/blob/master/assets/1547283087762.png)

### JSONP跨域 -- 百度天气API

百度搜索：百度天气API 查看接口文档

接口文档：<https://www.cnblogs.com/wangchengshen/p/3668946.html>

创建应用获取Ak：<http://lbsyun.baidu.com/apiconsole/key/create>

然后调用这个接口替换ak：

```
百度天气API接口
http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2

```

[![1547294841197](https://github.com/sbwxffnhc/react-antd/raw/master/assets/1547294841197.png)](https://github.com/sbwxffnhc/react-antd/blob/master/assets/1547294841197.png)

##### jsonp

**跨域条件：协议、域名、端口相同**

直接调用百度API接口会涉及跨域，所以我们需要通过JSONP实现跨域

```
yarn add jsonp --save
```

axios本身只支持get,post，put ,delete等的请求，但不支持中域

- 实现调用天气接口

#### 调试Promise

我们写下需要调试的代码：

[![1547297808763](https://github.com/sbwxffnhc/react-antd/raw/master/assets/1547297808763.png)](https://github.com/sbwxffnhc/react-antd/blob/master/assets/1547297808763.png)

[![1547297824738](https://github.com/sbwxffnhc/react-antd/raw/master/assets/1547297824738.png)](https://github.com/sbwxffnhc/react-antd/blob/master/assets/1547297824738.png)

- F12在浏览器打开调试窗口
- ctrl+p
- 输入你的文件如header/index.js就会找到你的组件Header/index.js

可以进行断点调试

- ctrl+p 打开你的axios/index.js 看是否有返回值 ，需要打断点调试
- 或者可以通过控制台NetWork查看网络的返回状态

[![1547297627539](https://github.com/sbwxffnhc/react-antd/raw/master/assets/1547297627539.png)](https://github.com/sbwxffnhc/react-antd/blob/master/assets/1547297627539.png)

可以看到实际已经返回有值 了

我们需要的参数为：

[![1547297751954](https://github.com/sbwxffnhc/react-antd/raw/master/assets/1547297751954.png)](https://github.com/sbwxffnhc/react-antd/blob/master/assets/1547297751954.png)

- 可以在代码中打断点 ‘debugger'

代码：

[![1547298075855](https://github.com/sbwxffnhc/react-antd/raw/master/assets/1547298075855.png)](https://github.com/sbwxffnhc/react-antd/blob/master/assets/1547298075855.png)

F12在窗口就可以在前面看到它的返回值 了，这样也可以更好地对返回值作判断 和取值

[![1547298002653](https://github.com/sbwxffnhc/react-antd/raw/master/assets/1547298002653.png)](https://github.com/sbwxffnhc/react-antd/blob/master/assets/1547298002653.png)

Promise知识点调试

--链式调用,不用通过callback回调层层调用，而是通过return Promise返回后，通过.then接收返回的结果

resolve是成功之后把数据返回回去，reject是失败之后把数据返回回去

Promise最大的好处就是可以链式调用

通过.then来接收Promise返回的状态

```
import JsonP from 'jsonp'
export default class Axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function(err,response){
                if(response.status == 'success'){
                    resolve(response);
                }
                else{
                    reject(response.message);
                }
            })
        })
    }
}

//-----------------------------------------------
    getWeatherAPIDate(){
        /*百度API接口 + jsonp封装的函数return的promise*/
        let city='北京';
        Axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            /*通过.then来接收 jsonp封装的函数的Promise的返回值 */
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
```

#### CSS3画三角形

```less

    .breadcrumb{
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        border-top: 1px solid #f99c00;
        .breadcrumb-title{
            text-align:center;
            font-size:@fontC;
            &:after{
                position: absolute;
                content: '';
                left:115px;
                top:39px;
                border-top: 9px solid @colorM;
                border-left: 12px solid transparent;
                border-right: 12px solid transparent;
            }
        }
     }
```

[![1547289720755](https://github.com/sbwxffnhc/react-antd/raw/master/assets/1547289720755.png)](https://github.com/sbwxffnhc/react-antd/blob/master/assets/1547289720755.png)

#### 添加日期

~~~javascript
import React from 'react';

export default{
    formateDate(time){
        if(!time) return '';
        let date = new Date(time);
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    }
}

~~~

