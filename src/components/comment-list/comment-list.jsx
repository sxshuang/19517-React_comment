import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './commentList.css'
import CommentItem from '../comment-item/comment-item.jsx'

export default class CommentList extends Component {


    // 给组件类 指定属性
    static propTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired
    }
    render() {

        // 先获取到传过来的数据
        const { comments } = this.props
        // 这个方法是通过app.jsx组件传过来的，先获取到，要传给item.jsx组件
        const { deleteComment } = this.props

        // 计算判断是否有没有评论，没有的话，显示 h2 的内容，接受一个变量
        const display = comments.length === 0 ? 'block' : 'none'

        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{ display }}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((item, index) => {
                            // deleteComponent 事件是从 app.jsx传过来给 list.jsx，然后再给item.jsx组件；----- ；item.jsx 需要index，所以这个父组件再传给item.jsx这个子组件
                            return <CommentItem comment={item} key={index} deleteComment={deleteComment} index={index} />
                        })
                    }

                </ul>
            </div>
        )
    }
}
// 给组件类：接受前，声明接受什么属性
// CommentList.propTypes = {
//     comments: PropTypes.array.isRequired
// }