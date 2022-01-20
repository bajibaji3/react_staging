import React, { Component } from 'react'
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      {id: '01', title: '消息1'},
      {id: '02', title: '消息2'},
      {id: '03', title: '消息3'},
    ]
  }
  render() {
    const {messageArr} = this.state;
    return (
        <div>
          <ul>
            {
              messageArr.map(item => {
                return(
                    <li key={item.id}>
                      <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
                      &nbsp;<button onClick={() => this.pushShow(item.id, item.title)}>push查看</button>
                      &nbsp;<button onClick={() => this.replaceShow(item.id, item.title)}>replace查看</button>
                    </li>
                )
              })
            }
          </ul>
          <hr/>
          <Route path='/home/message/detail/:id/:title' component={Detail}/>
          <button onClick={this.back}>回退</button>
          <button onClick={this.forward}>前进</button>
          <button onClick={this.go}>go</button>
        </div>
    )
  }

  pushShow = (id, title) => {
    //携带params参数
    this.props.history.push(`/home/message/detail/${id}/${title}`)

    //携带search参数
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

    //携带state参数
    // this.props.history.push('/home/message/detail', {id: id, title: title})
  }

  replaceShow = (id, title) => {
    //携带params参数
    this.props.history.replace(`/home/message/detail/${id}/${title}`)

    //携带search参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

    //携带state参数
    // this.props.history.replace('/home/message/detail', {id: id, title: title})
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
