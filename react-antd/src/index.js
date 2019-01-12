import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactLife from './pages/demo/ReactLife';
import Home from './pages/route_demo/route1/Home'
import Router from './pages/route_demo/route4/router'
import Buttons from './pages/ui/buttons'
import Admin from './admin'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Admin />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
