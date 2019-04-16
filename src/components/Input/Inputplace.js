import React,{Component} from "react";
import './Inputplace.css'

export default class Inputplace extends Component{

    state = {
        title : ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.inputPlace(this.state.title);  //mistake
        this.setState({ title:''})
    }
    onChange = (e) => this.setState({[e.target.title]:e.target.value})

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChange} title="title" value={this.state.title} className="inputfield" type="text" placeholder='Type your text...'></input>
                    <button className="textbutton">Add Task</button>
                </form>
            </div>
        )
   }
}