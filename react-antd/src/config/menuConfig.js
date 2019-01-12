const menuList = [
    {
        title: '首页',
        key: '/home',
        type:'mail',
    },
    {
        title: 'UI',
        key: '/ui',
        type:'',
        children: [
            {
                title: '按钮',
                key: '/ui/buttons',
                type:'',
            },
            {
                title: '弹框',
                key: '/ui/modals',
                type:'',
            },
            {
                title: 'Loading',
                key: '/ui/loadings',
                type:'',
            },
            {
                title: '通知提醒',
                key: '/ui/notification',
                type:'',
            },
            {
                title: '全局Message',
                key: '/ui/messages',
                type:'',
            },
            {
                title: 'Tab页签',
                key: '/ui/tabs',
                type:'',
            },
            {
                title: '图片画廊',
                key: '/ui/gallery',
                type:'',
            },
            {
                title: '轮播图',
                key: '/ui/carousel',
                type:'',
            }
        ]
    },
    {
        title: '表单',
        key: '/form',
        type:'',
        children: [
            {
                title: '登录',
                key: '/form/login',
                type:'',
            },
            {
                title: '注册',
                key: '/form/reg',
                type:'',
            }
        ]
    },
    {
        title: '表格',
        key: '/table',
        type:'',
        children: [
            {
                title: '基础表格',
                key: '/table/basic',
                type:'',
            },
            {
                title: '高级表格',
                key: '/table/high',
                type:'',
            }
        ]
    },
    {
        title: '富文本',
        key: '/rich',
        type:'',
    },
    {
        title: '城市管理',
        key: '/city',
        type:'',
    },
    {
        title: '订单管理',
        key: '/order',
        type:'',
        btnList: [
            {
                title: '订单详情',
                key: 'detail',
                type:'',
            },
            {
                title: '结束订单',
                key: 'finish',
                type:'',
            }
        ]
    },
    {
        title: '员工管理',
        key: '/user',
        type:'',
    },
    {
        title: '车辆地图',
        key: '/bikeMap',
        type:'',
    },
    {
        title: '图标',
        key: '/charts',
        type:'',
        children: [
            {
                title: '柱形图',
                key: '/charts/bar',
                type:'',
            },
            {
                title: '饼图',
                key: '/charts/pie',
                type:'',
            },
            {
                title: '折线图',
                key: '/charts/line',
                type:'',
            },
        ]
    },
    {
        title: '权限设置',
        key: '/permission',
        type:'',
    },
];
export default menuList;