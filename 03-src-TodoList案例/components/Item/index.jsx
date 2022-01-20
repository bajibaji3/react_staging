import React, {Component} from "react";
import './index.css'

export default class Item extends Component {
  state = {mouse: false}

  render() {
    const {todo} = this.props;
    const {mouse} = this.state;
    return (
        <li
            style={{backgroundColor: mouse ? '#ddd' : 'white'}}
            onMouseLeave={this.handleMouse(false)}
            onMouseEnter={this.handleMouse(true)}>
          <label>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={this.handleCheck(todo.id)}/>
            <span>{todo.name}</span>
          </label>
          <button
              onClick={() => {this.handleDelete(todo.id)}}
              className="btn btn-danger"
              style={{display: mouse ? 'block' : 'none'}}>删除</button>
        </li>
    )
  }

  //鼠标移入移出的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }

  //勾选或取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      this.props.changeTodo(id, event.target.checked)
    }
  }

  //删除某个todo的回调
  handleDelete = (id) => {
    if (window.confirm('确定删除吗？'))
      this.props.deleteTodo(id);
  }
}