import React, {Component} from "react";
import './index.css'

export default class Footer extends Component {
  render() {
    const {todos} = this.props;
    //已完成的个数
    const doneCount = todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
    //总数
    const totalCount = todos.length;
    return (
        <div className="todo-footer">
          <label>
            <input type="checkbox" checked={doneCount === totalCount && totalCount !== 0} onChange={this.handleCheckAll}/>
          </label>
          <span>
            <span>已完成{doneCount}</span> / 全部{totalCount}
          </span>
          <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
        </div>
    )
  }

  //全选
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  //删除所有已完成的
  handleClearAllDone = () => {
    this.props.clearAllDone();
  }
}