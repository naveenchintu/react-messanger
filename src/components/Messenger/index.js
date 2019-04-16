import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import Todos from '../Todos/Todos';
import './Messenger.css';
import Header from '../Header/Header';
import Inputplace from '../Input/Inputplace';
import About from '../Pages/About';
// import uuid from'uuid';   // for id we used uuid library
import axios from 'axios';
  //use title instead of title
export default class Messenger extends Component {
  state = {
    todos:[]  // we can add our json data in this array
}

//getting data using API calls from third party URL
componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res =>
     this.setState({todos:res.data})
  )
}

//delete the item  using third party API calls 

delitem = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => this.setState({todos:[...this.state.todos.filter(todo =>todo.id !==id)]}));
}

// delete the item  using local data
// delitem = (id) => {
//   this.setState({todos:[...this.state.todos.filter(todo=> todo.id !==id)]});
// }


//adding items to list using third party API

inputPlace = (title) =>{
  axios.post('https://jsonplaceholder.typicode.com/todos',{
    title,
    completed:false
  })
  .then(res => this.setState({todos:[...this.state.todos,res.data]}))
}

//adding items to list
// inputPlace = (title) =>{
//   const newTodo = {
//     id:uuid.v4(),
//     title,
//     completed: false
//   }
//   this.setState({todos:[...this.state.todos, newTodo]});
// }


clickMe= (id) => {
  this.setState({todos:this.state.todos.map(todo =>{
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  })})
}

  render() {
    return (
      <div className="messenger">
        {/* <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        /> */}

        {/* <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        /> */}

        <div className="scrollable sidebar">
          <ConversationList />
        </div>

        <div className="scrollable content">
          <MessageList />
        </div>
        <Router>
          <div className="scrollable todolist">
            <div>
              <Header/>
              <Route exact path = "/" render={props =>(
                <React.Fragment>
                    <Inputplace inputPlace={this.inputPlace}/>
                    <Todos todos={this.state.todos} clickMe={this.clickMe} delitem={this.delitem}/>
                </React.Fragment>
              )}/>
              <Route path="/about" component={About} />
            </div>
          </div>
          </Router>
        
      </div>
    );
  }
}

//npm i react-router-dom  for install react router library

//used axios to make an Api calls 