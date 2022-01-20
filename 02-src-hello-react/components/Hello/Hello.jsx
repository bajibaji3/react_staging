import React, {Component} from "react";
//样式中的模块化
// import from './Hello.css'
import hello from './Hello.module.css'

export default class Hello extends Component {
  render() {
    return (
        // <h2 className='title'>Hello React!</h2>
        <h2 className={hello.title}>Hello React!</h2>
    )
  }
}