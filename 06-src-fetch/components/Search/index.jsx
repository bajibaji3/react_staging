import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

	search = async () => {


		//获取用户的输入(连续解构赋值+重命名)
		const {keyWordElement: {value: keyWord}} = this
		//发送请求前通知List更新状态
		PubSub.publish('atguigu', {isFirst: false, isLoading: true})
		//发送网络请求------使用axios发送
		// axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
		// 	response => {
		// 		//请求成功后通知List更新状态
		// 		PubSub.publish('atguigu', {isLoading: false, users: response.data.items})
		// 	},
		// 	error => {
		// 		//请求失败后通知List更新状态
		// 		PubSub.publish('atguigu', {isLoading: false, err: error.message})
		// 	}
		// )

		//发送网络请求------使用fetch发送(未优化)
		// fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
		// 		res => {
		// 			console.log('联系服务器成功了');
		// 			return res.json();
		// 		},
		// 		err => {
		// 			console.log('联系服务器失败了', err);
		// 			//返回新的初始化的Promise实例，终止Promise链
		// 			return new Promise();
		// 		}
		// 	).then(
		// 		res => {
		// 			console.log('获取数据成功了', res);
		// 		},
		// 		err => {
		// 			console.log('获取数据失败了', err);
		// 		}
		// )

		//发送网络请求------使用fetch发送(优化)
		//fetch使用率不高，老版本的浏览器可能不支持
		try {
			const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
			const data = await response.json()
			PubSub.publish('atguigu', {isLoading: false, users: data.items})
			// console.log(data);
		} catch (err) {
			console.log('请求出错', err);
			PubSub.publish('atguigu', {isLoading: false, err: err.message})
		}
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}
