import React from 'react'


class CommentAction extends React.Component {
    /*constructor(props) {
        super(props);
        this.getLike = this.getLike.bind(this);
        this.getDislike = this.getDislike.bind(this);
    }
    getLike() {
        alert('you clicked on like  button');
    }
    getDislike() {
        alert('you clicked on Disliked  button');
    }*/

    constructor(){
        super()
        this.state={
            like:0,
            unlike:0
        }
        
      //  this.state = {date: new Date()};----to add system date
        this.likeMe=this.likeMe.bind(this)
        this.unLikeMe=this.unLikeMe.bind(this)
    }

    likeMe=function(){
        console.log("Liked")
       // this.state.like = this.state.like + 1 ; this will not work
       this.setState({

               like:this.state.like+1
           })
    }
    unLikeMe(){
    console.log("Unliked")
      this.setState({
          unlike:this.state.unlike+1
      })
    }
    render() {
        return (
            <div>
                <button onClick={this.likeMe}>like {this.state.like}</button>
                <button onClick={this.unLikeMe}>dislike {this.state.unlike}</button>
            </div>
        )
    }
    

}

export default CommentAction;