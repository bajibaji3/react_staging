import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from "./pages/Home";//路由组件
import About from "./pages/About";//路由组件
import Header from "./components/Header";//一般组件
import MyNavLink from "./components/MyNavLink";//一般组件

export default class App extends Component {
  render() {
    return (
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <Header/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                {/*标签体内容也是一个特殊的标签属性，对应children属性，直接给标签的children属性赋值不写标签体内容也是可以的*/}
                <MyNavLink to='/about'>About</MyNavLink>
                <MyNavLink to='/home'>Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
