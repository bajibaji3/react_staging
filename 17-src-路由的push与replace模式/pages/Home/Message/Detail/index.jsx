import React, { Component } from 'react'

const data = [
  {id: '01', content: '11111'},
  {id: '02', content: '22222'},
  {id: '03', content: '33333'},
]
export default class Detail extends Component {
  render() {
    //接收state参数
    const {id, title} = this.props.location.state || {};
    const res = data.find(item => {
      return item.id === id;
    }) || {}
    return (
        <ul>
          <li>id:{id}</li>
          <li>title:{title}</li>
          <li>content:{res.content}</li>
        </ul>
    )
  }
}
