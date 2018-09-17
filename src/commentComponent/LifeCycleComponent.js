import React from 'react'
import ReactDOM from 'react-dom'


class LifeCycleComponent extends React.Component{

  constructor(){
      super()
      this.state={
          status:0
      }
      this.updateState=this.updateState.bind(this)
  }

    componentWillMount(){
        console.log("Component will be displayed in view")
    }
    componentDidMount(){
        console.log("component is displayed in the view")
    }

     componentWillUpdate(){
         console.log("component will update its state now!")
     }
    componentDidUpdate(){
        console.log("componenet state is updated")
    }

    componentWillUnmount(){
        console.log("Removing the lifecycle componet from the veiw!!")
    }
    updateState(){
        this.setState({status:this.state.status+1})
        if(this.state.status>=10){
            ReactDOM.unmountComponentAtNode(document.getElementById("lifeCycle"))
        }
    }

    unMountMe(){
        ReactDOM.unmountComponentAtNode(document.getElementById("lifeCycle"))
    }

    render(){
        return(
            <div>
                lifecycle methods
                <button onClick={this.updateState}>changing state{this.state.status}</button>
                <button onClick={this.unMountMe}>unMount</button>
            </div>
        )
    }
}
export default LifeCycleComponent