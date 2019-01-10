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