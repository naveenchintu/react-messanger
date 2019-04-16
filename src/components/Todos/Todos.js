import React, { Component } from 'react';
import TodoItem from './TodoItem/TodoItem';
import PropTypes from 'prop-types';
import './Todos.css';

export default class Todos extends Component{

    render(){
        
    return this.props.todos.map((todo) =>(
            //    <h3>{ todo.title }</h3>  
                
                <TodoItem key={todo.id} todo={todo} delitem={this.props.delitem} clickMe={this.props.clickMe}/>               
    ));

    // <div className="todo">
    //     <h1 className="todo-header">Hello this is a new Todo Application</h1>
    //     {/* <h3 className="todo-list"> */}
    //     {this.props.todos.map((todos) =>{
    //         <h3>{todos.title}</h3>
    //     })}
    //     {/* </h3> */}
    // </div>
        
    }
};

//prop types
Todos.propTypes= {
    todos:PropTypes.array.isRequired

}
