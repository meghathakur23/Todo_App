import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todo';
import Header from './components/layout/header';
//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = { 
    todos :[{
      id: 1,
      title: 'take out the trash',
      completed: false
    },
    {
      id: 2,
      title: 'Help out ',
      completed: true
    },
    {
      id: 3,
      title: 'learn react',
      completed: false
    }]
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

  render() { 
    return ( 
      <div >
        <Header/>
        <Todos todos={this.state.todos} 
        markComplete={this.markComplete}
        delTodo={this.delTodo} />
        
      </div>
     );
  }
}
 
export default App;