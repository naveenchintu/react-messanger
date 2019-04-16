import React ,{ Component } from "react";
import PropTypes from 'prop-types';
import './TodoItem.css';

export default class TodoItem extends Component{

    getStyle = () => {
        return {
        padding : '15px',
        borderBottom:"4px green dotted",
        textDecoration : this.props.todo.completed ? 'line-through' :'none'}
    }
    
    render(){
        const {id,title} = this.props.todo;
        return (
            <div  className = "todoitems" style={this.getStyle()}>
                <form>
                    <p>
                        <input type="text" onChange={this.props.clickMe.bind(this,id)}/>
                        {title}
                        <span onClick={this.props.delitem.bind(this,id)}  className="delbutton">Remove</span>
                    </p>
                </form>
            </div>
        )
    }

}
//prop types
TodoItem.propTypes= {
    todo:PropTypes.object.isRequired

}



