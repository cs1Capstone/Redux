import React, { Component } from 'react';
import '../styles/App.css';
import TodoListContainer from './TodoListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tyge's Todo List</h1>
        </header>
        <TodoListContainer />
      </div>
    );
  }
}
