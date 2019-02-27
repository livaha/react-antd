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