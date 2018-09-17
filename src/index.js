import React from 'react'
import ReactDOM from 'react-dom'

//import Comment from './commentComponent/Comment'
//import LifeCycleComponent from './commentComponent/LifeCycleComponent';
//import FormComponenet from './FormComponent/FormComponent';
//import ControlledForm from './FormComponent/ControlledForm';
import RemoteData from './APIComponent/RemoteData';


//var position=document.getElementById("rootComponent");
//var position2=document.getElementById("container2");
//var position3=document.getElementById("container3");
var lifeCycle=document.getElementById("lifeCycle")

/*ReactDOM.render(
                <div>
                     <Comment name="sri">this is comment1</Comment>
                     <Comment name="sri2">this is comment2</Comment>
                     <Comment name="sri3">this is comment3</Comment>
                     </div>,position)

ReactDOM.render(<div>/*<LifeCycleComponent></LifeCycleComponent>
                        <p></p>
                        <FormComponenet></FormComponenet>
                  </div>,lifeCycle)

ReactDOM.render(<div>
                      <ControlledForm></ControlledForm>
                </div>,lifeCycle)*/

ReactDOM.render(<div>
    <RemoteData></RemoteData>
</div>,lifeCycle)



      