import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todo';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import axios from 'axios';

class App extends Component {
  state = { 
    todos :[]
   }


  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .then(res => this.setState({todos: res.data}))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(
      todo => todo.id !== id)]}));
  }

  // Add Todo
  addTodo = (title) => {
    axios.post("https://jsonplaceholder.typicode.com/todos",{
      title, 
      completed: false
    })
   .then(res => this.setState({ todos:
    [...this.state.todos, res.data]}));
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