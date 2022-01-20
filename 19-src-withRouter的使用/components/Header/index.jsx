import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <div className="page-header">
          <h2>React Router Demo</h2>
          <button onClick={this.back}>回退</button>
          <button onClick={this.forward}>前进</button>
          <button onClick={this.go}>go</button>
        </div>
    )
  }

  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward();
  }

  go = () => {
    //参数为正数表示前进几步，负数表示后退几步
    this.props.history.go(2);
  }
}

//withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
//withRouter的返回值是一个新组件
export default withRouter(Header)