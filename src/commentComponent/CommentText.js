import React from 'react'


class CommentText extends React.Component{

    render(){

        return(
            <div>
            {this.props.children}    
            </div>     
        )

    }
}
export default CommentText;