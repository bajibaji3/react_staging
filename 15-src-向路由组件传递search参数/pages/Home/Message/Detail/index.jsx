import React, { Component } from 'react'
import qs from 'querystring'

const data = [
  {id: '01', content: '11111'},
  {id: '02', content: '22222'},
  {id: '03', content: '33333'},
]
export default class Detail extends Component {
  render() {
    //接收search参数
    const {search} = this.props.location;
    const {id, title} = qs.parse(search.slice(1))
    const res = data.find(item => {
      return item.id === id;
    })
    return (
        <ul>
          <li>id:{id}</li>
          <li>title:{title}</li>
          <li>content:{res.content}</li>
        </ul>
    )
  }
}
