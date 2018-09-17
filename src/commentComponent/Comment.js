import React from 'react'

import NameComponent from './NameComponent';
import CommentText from './CommentText';
import CommentAction from './CommentAction'


class Comment extends React.Component {

    render() {
        return (
                <div>
                <NameComponent >{this.props.name}</NameComponent><br/>
                <CommentText>{this.props.children}</CommentText><br/>
                <CommentAction></CommentAction>
                </div>
        )
    }
}
export default Comment;