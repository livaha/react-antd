import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactLife from './page/demo/ReactLife';
import Home from './page/route_demo/route1/Home'
import Router from './page/route_demo/route4/router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
