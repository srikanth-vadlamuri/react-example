import React from 'react'


class FirstFriend extends React.Component {
    render() {

        let nameColor = {
            color: this.props.color,
            backgroundColor: this.props.bgcolor,
            float:"left",
            padding:"5px",
            margin:"2px",
            border:"2px solid black",
            borderRadius:"5px"
        }
        return (
            <div style={nameColor}>

                {this.props.children} 
            </div>
        )
    }
}

export default FirstFriend;