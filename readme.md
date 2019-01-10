# Reactȫ��Ͱ+AntD������̨����ϵͳ����

#### React ȫ��Ͱ

+ React����֪ʶ����������
+ Router4.0�﷨����
+ Redux���ɿ���

#### AntD UI���

+ ��ʵ�õĻ������ 
+ AntDդ��ϵͳ
+ ETable�����װ
+ BaseForm�����װ   ----
+ �����Ƕ��ѡ����ѡ��װ

#### �������Ʒ��

+ Axios���������
+ API��װ
+ ��������
+ Ȩ�ޡ��˵���װ
+ ���ڡ����ֻ��ŷ�װ
+ Loading����ҳ��Mock...



#### ��Ŀ����ܹ�

![1547120255663](assets/1547120255663.png)



#### ��̬����

- Vue��̬��Vue + Vue-Router + Vuex + Axios + Babel + Webpack ...
- React��̬��React + React-Router + Redux + Axios + Babel + Webpack ...

Redux : û�й�ϵ��������ͨ��

���ʽʵ�֣���Ҫ�Ծ���������������ʲô�����ʵ��

����ʽʵ�֣� ֻ��Ҫ�����������ʲô������������ʵ��



## React���ּܡ�Yarn����

+ #### ��ΰ�װ��ʹ��React���ּ�

~~~
npm ������ https://facebook.github.io/create-react-app/docs/getting-started
���� �� https://reactjs.org/docs/create-a-new-react-app.html

npm i -g create-react-app my-app
create-react-app my-app
cd my-app
npm start

������ʹ�ã�
npx create-react-app my-app
cd my-app
npm start
~~~

+ #### Yarn

~~~ 
ʹ�÷����� https://yarn.bootcss.com/docs/usage/
~~~

#####  ʲô��Yarn

+ Yarn���µ�һ����������

##### Ϊʲôʹ��Yarn

+ �ٶȿ�
+ ��װ�汾ͳһ������ȫ     *Yarn���԰Ѱ汾������ʹ��Ŀ�İ汾ͳһ*
+ ���������
+ ���õ����廯

##### ���ʹ��Yarn

+ yarn init   ��ʼ����Ŀ
+ yarn add   ��װһ����
+ yarn remove   ɾ��һ����
+ yarn  / yarn install   ��װ��Ŀ����



##### react���ּ���webpack

react���ּ��Ѿ���webpack��װ�����ˣ�����ֻ��Ҫ��עcodeʵ�־�����

�����Ҫ��webpack������Ҫͨ��```eject```����¶��webpack



## ��Ŀ��װ��������

~~~
yarn add react-router
~~~





## Ŀ¼�ṹ

```js
+-- build/                                  ---������ļ�Ŀ¼
+-- config/                                 ---npm run eject ��������ļ�Ŀ¼
+-- node_modules/                           ---npm�����ļ�Ŀ¼
+-- public/                                 
|   --- index.html							---��ҳ���html�ļ�
|   --- npm.json							---echarts��������
|   --- weibo.json							---echarts��������
+-- src/                                    ---���Ĵ���Ŀ¼
|   +-- components                          ---��ʽ������������Ŀ¼
|   |    +-- animation                      ---�������
|   |    |    --- ...   
|   |    +-- charts                         ---ͼ�����
|   |    |    --- ...   
|   |    +-- dashboard                      ---��ҳ���
|   |    |    --- ...   
|   |    +-- forms                          ---�����
|   |    |    --- ...   
|   |    +-- pages                          ---ҳ�����
|   |    |    --- ...   
|   |    +-- tables                         ---������
|   |    |    --- ...   
|   |    +-- ui                             ---ui���
|   |    |    --- ...   
|   |    --- BreadcrumbCustom.jsx           ---���м���
|   |    --- HeaderCustom.jsx               ---�����������
|   |    --- Page.jsx                       ---ҳ������
|   |    --- SiderCustom.jsx                ---��߲˵����
|   +-- style                               ---��Ŀ����ʽ���Ŀ¼����Ҫ����less��д
|   +-- utils                               ---�����ļ����Ŀ¼
|   --- App.js                              ---�������ļ�
|   --- index.js                            ---��Ŀ������js����ļ�������·�����õ�
--- .env                                    ---������Ŀ�Զ���˿������ļ�
--- .eslintrc                               ---�Զ���eslint�����ļ����������ӵ�react jsx�﷨����
--- package.json                                    
```



## React�������ڽ���

���������뿴��Ŀ¼���ļ���React��������.md��

����Ŀ�еĴ���ʾ����

src/index.js

~~~
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

~~~

src/page/demo/ReactLife.js

~~~
/*�������ں�������
ʵ�֣�ͨ�������ť�ı�stateֵ
֪ʶ�㣺
1.��������this����ͷ������ʹ�÷���
   onClick={this.handleAdd} ---  handleAdd=()=>{��ͷ������this�������ʵ��}
   onClick={this.handleClick.bind(this)} ---  handleClick(){����Ǽ�ͷ������this���������ʵ����
    �����ڵ��õ�ʱ��Ҫ�õ�.bind(this)}
   

 */
import React from 'react'

export default class ReactLife extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }

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
                <p>React�������ڽ���</p>
                <button onClick={this.handleAdd}>���һ��</button>
                <button onClick={this.handleClick.bind(this)}>���һ��</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}
~~~



























