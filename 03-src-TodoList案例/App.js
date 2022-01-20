//创建“外壳”组件
import React, {Component} from "react";
import './App.css'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

//创建并暴露App组件
export default class App extends Component {
  //状态在哪里，操作状态的方法就在哪里
  //初始化状态
  state = {todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: false},
      {id: '003', name: '打代码', done: true},
    ]}

  //用于添加一个todo，接收todo对象
  addTodo = (todo) => {
    const {todos} = this.state;
    const newTodos = [todo, ...todos]
    this.setState({todos: newTodos})
  }

  //更新某一个todo的勾选状态
  changeTodo = (id, done) => {
    const {todos} = this.state;
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, done};
      } else {
        return todo;
      }
    })
    this.setState({todos: newTodos})
  }

  //删除某一个todo
  deleteTodo = (id) => {
    const {todos} = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    })
    this.setState({todos: newTodos})
  }

  //全选todo
  checkAllTodo = (done) => {
    const {todos} = this.state;
    const newTodos = todos.map(todo => {
      return {...todo, done: done}
    })
    this.setState({todos: newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state;
    const newTodos = todos.filter(todo => {
      return !todo.done;
    })
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state
    return (
        <div>
          <div className="todo-container">
            <div className="todo-wrap">
              <Header addTodo={this.addTodo}/>
              <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
              <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
            </div>
          </div>
        </div>
    )
  }
}
