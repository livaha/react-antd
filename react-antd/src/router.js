import React from 'react'
import {HashRouter , Route , Switch , BrowserRouter} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import NoMatch from './pages/noMatch'
import Buttons from './pages/ui/buttons'

export default class IRouter extends React.Component {
    render() {
      return (
        <div>
          <BrowserRouter>
              {/*App组件的主要作用是将所有的子组件都放在一个根组件下，可以处理同级的路由 */}
            <App>
                <Route path="/login" component={Login} />
                {/*<Route path="/admin" component={Admin} />*/}
                <Route path="/ui" render={()=>
                    <Admin>
                        <Route path="/ui/buttons" component={Buttons} />
                        <Route component={NoMatch} />
                    </Admin>
                }/>
                <Route path="/order/detail" component={Login} />

            </App>
          </BrowserRouter>
        </div>
      );
    }
  }


  