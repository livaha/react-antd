## .map

~~~javascript
//.map是为了给列表中每个值加key，消除警告  ,列表返回的result为数组类型
let list = res.result.item_list.map((item,index)=>{
    item.key = index;
    return item;
})
~~~



## 时间戳转化为动态时钟--moment

~~~jsx
    Util.momentTime(Time){
        //console.log('Time',Time)
        return moment(Time).format("YYYY-MM-DD HH:mm:ss")
    }
    
    let localTime = 789926400000
    setInterval(()=>{      
      //let sysTime = Util.momentTime(time);
      let sec = 1000;
      let sysTime = moment(new Date(localTime += sec));
      sysTime = sysTime.format('YYYY-MM-DD HH:mm:ss')
      
    },1000)


~~~

## 时钟倒计时

~~~jsx

 countDown=(secondsToGo)=> {
  //let secondsToGo = 5;
  const modal = Modal.success({
    title:"设备正在重启",
    content: `设备将在 ${secondsToGo} 秒后启动完成...`,

    okButtonProps:{ disabled: true },
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content:  `设备将在 ${secondsToGo} 秒后启动完成...`,
    });
  }, 1000);
  setTimeout(() => {
    window.location.reload();//定时时间到后刷新页面，应该是退出后刷新到登陆页面
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}
~~~





























