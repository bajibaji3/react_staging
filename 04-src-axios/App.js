//创建“外壳”组件
import React, {Component} from "react";
import axios from "axios";



//创建并暴露App组件
export default class App extends Component {
  render() {
    return (
        <div>
          <button onClick={this.getData}>获取数据</button>
        </div>
    )
  }

  getData = () => {
    // const instance = axios.create({
    //   baseURL: 'http://httpbin.org/',
    //   method: 'get'
    // })
    // instance('/get').then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // })
    axios.get('http://httpbin.org/get').then(
        res => {
          console.log('成功了', res);
        },
        err => {
          console.log('失败了', err);
        }
    )
  }
}
