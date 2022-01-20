import React, { Component } from 'react'

export default class News extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('home/message')
    }, 2000)
  }

  render() {
    return (
        <ul>
          <li>News01</li>
          <li>News02</li>
          <li>News03</li>
        </ul>
    )
  }
}
