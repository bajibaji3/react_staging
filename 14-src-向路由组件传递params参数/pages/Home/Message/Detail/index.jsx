import React, { Component } from 'react'

const data = [
  {id: '01', content: '11111'},
  {id: '02', content: '22222'},
  {id: '03', content: '33333'},
]
export default class Detail extends Component {
  render() {
    //接收params参数
    const {id} = this.props.match.params;
    const res = data.find(item => {
      return item.id === id;
    })
    return (
        <ul>
          <li>id:{res.id}</li>
          <li>content:{res.content}</li>
        </ul>
    )
  }
}
