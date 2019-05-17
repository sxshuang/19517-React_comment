import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends Component {

    // 给组件类添加属性
    static propTypes = {
        addComment: PropTypes.func.isRequired
    }
    
    state = {
        username: '',
        content: ''
    }

    // 这里用箭头函数，就不用在constructor里边 .bind() 绑定this指向了 
    handleSubmit = () => {
        // 收集数据,并封装成comment对象
        // 这里的state 对象对应的就是comment数据对象
        const comment = this.state
        // 更新状态（在父组件App.jsx中自定义事件更新状态）,【数据在哪个组件，更新状态就在哪个组件】
        // 把comment传过去
        this.props.addComment(comment)

        // 最后，清除输入数据
        this.setState({
            username: '',
            content: ''
        })


    }
    // 监听用户名输入框
    handleNameChange = (event) => {
        const username = event.target.value
        this.setState({
            username: username
        })

    }
    handleContentChange = (event) => {
        const content = event.target.value
        this.setState({
            content
        })

    }

    render() {
        const { username, content } = this.state
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" value={username} onChange={this.handleNameChange} />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" value={content} onChange={this.handleContentChange}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}