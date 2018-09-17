import React from 'react'

class FormComponenet extends React.Component {
       
    constructor(){
        super()
        this.playWithSubmit=this.playWithSubmit.bind(this)
    }
     
    playWithSubmit(e){
        e.preventDefault()
        console.log(e);
        console.log(this.input.value) ;       
    }
  

    render() {
        return (
            <div>
                <form onSubmit={this.playWithSubmit}>
                    Name: <input type="text" ref={(input) => this.input = input}/>
                        
                    <input type="submit"/>
                </form>
               
            </div>
        )
    }
}
export default FormComponenet