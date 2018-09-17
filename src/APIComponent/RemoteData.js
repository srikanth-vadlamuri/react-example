import React from 'react'
import axios from 'axios'

import DisplayUSer from './DisplayUSer'


class RemoteData extends React.Component {

    constructor() {
        super();
        this.state = {
            users: [],
            title:"",
            description:"",
            vote:0,
            imageUrl:"",
            avatarUrl:"",
            url:""

        }
        this.callRemoteData=this.callRemoteData.bind(this)
        this.displayData=this.displayData.bind(this)
        this.inputTitle=this.inputTitle.bind(this)
        this.inputDescription=this.inputDescription.bind(this)
        this.inputImage=this.inputImage.bind(this)
        this.insertData=this.insertData.bind(this)
    }

    componentWillMount() {
        this.callRemoteData()
    }
    callRemoteData() {
        axios.get("http://localhost:4000/feedback")
        
        .then((response) => {
            console.log(response.data)

            this.setState({ users: response.data })
            console.log(this.state.users)

        })
    }
    displayData() {
        return (this.state.users.map((oneUser) => {
            return (<DisplayUSer
                key={oneUser.id}
                id={oneUser.id}
                title={oneUser.title}
                description={oneUser.description}
                imageUrl={oneUser.imageUrl}
                avatarUrl={oneUser.avatarUrl}
                vote={oneUser.vote}>
                
            </DisplayUSer>)
        }))

    }

    inputTitle(e){
        this.setState({title:e.target.value})
    }
    inputDescription(e){
        this.setState({description:e.target.value})
    }
    inputImage(e){
        const tempPath="../images/"+e.target.files[0].name
        this.setState({
                        imageUrl:tempPath,
                        avatarUrl:tempPath,
                        url:"http://www.google.com",
                        })
    }

    insertData(e){
           e.preventDefault()
        const insertRecord={
            "title":this.state.title,
            "description":this.state.description,
            "url":this.state.url,
            "imageUrl":this.state.imageUrl,
            "avatarUrl":this.state.avatarUrl,
            "vote":this.state.vote
        }
        axios.post("http://localhost:4000/feedback",insertRecord)
                .then((response)=>{
                    console.log(response.data)
        })
    }

    render() {
        return (
            <div>
                child component to display JSON data
                <table border="1">
                <thead>
                        <tr>
                            <th></th>
                            <th>id</th>
                            <th>votes</th>
                            <th>title</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayData()}
                        </tbody>
                </table>
                <p></p>
                 <form onSubmit={this.insertData}>
                   <label>Title:</label>
                   <input type="text" 
                            value={this.state.title}
                            onChange={this.inputTitle} 
                   />
                   <br></br>
                   <label>Description:</label>
                    <input type="textarea" 
                            value={this.state.description} 
                            onChange={this.inputDescription} 
                   />
                   <br></br>
                   <label>ProfilePic:</label>
                    <input type="file" 
                            onChange={this.inputImage}
                            accept="image/png , image/jpeg"
                   />
                   <br></br>
                   <input type="submit" value="insert data"/>
                 </form>
                 
            </div>
        );
    }
}
export default RemoteData