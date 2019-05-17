import React, { Component } from 'react'
import CommentAdd from '../comment-add/comment-add.jsx'
import CommentList from '../comment-list/comment-list.jsx'

export default class App extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         comments: [
    //             {username:"小明",content:'React还可以！'},
    //             {username:'小李',content:'Vue也不错！'}
    //         ]
    //     }
    // }
    // 给【组件对象---this】指定 state 属性
    state = {
        comments: [
            { username: "小明", content: 'React还可以！' },
            { username: '小李', content: 'Vue也不错！' }
        ]
    }

    // 添加评论(更新comment数据)
    addComment = (comment) => {
        // 先获取到原本的数据数组
        const { comments } = this.state
        // 在数组前头添加新数据
        comments.unshift(comment)

        // 更新状态
        this.setState({
            comments: comments
        })
    }
    // 删除指定评论
    deleteComment = (index) => {
        const { comments } = this.state
        // 它可以做增删改，只不过参数不一样（两个参数，数字表示删除几个，；如果三个参数，表示添加）
        comments.splice(index, 1)
        // 更新状态
        this.setState({
            comments: comments
        })
    }

    render() {
        // 获取到数据【解构赋值写法】
        const { comments } = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    {/* 把更新状态自定义的事件，传给这个组件 */}
                    <CommentAdd addComment={this.addComment} />
                    {/* 把数据传给这个组件 */}
                    <CommentList comments={comments} deleteComment={this.deleteComment} />

                </div>
            </div>
        )
    }
}