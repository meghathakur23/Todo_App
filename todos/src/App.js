import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todo';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
//import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = { 
    todos :[]
   }

  //Toggle complete

  markComplete = (id) => {
   this.setState({ todos: this.state.todos.map(todo => {
     if(todo.id === id){
       todo.completed = !todo.completed
     }
     return todo;
   })});
  }

  // Delete Todo 
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(
      todo => todo.id !== id)]});
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title, 
      completed: false
    }
   this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() { 
    return ( 
      <div className="App">
        <div className="container">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} 
        markComplete={this.markComplete}
        delTodo={this.delTodo} />
        </div> 
      </div>
     );
  }
}
 
export default App;