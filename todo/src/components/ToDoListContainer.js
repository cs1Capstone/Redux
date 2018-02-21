import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodos, getTodos } from '../actions';

class TodoList extends Component {
  constructor() {
    super();
    this.state ={
      text: ''
    };
  };

  componentDidMount() {
    const myToDos = JSON.parse(localStorage.getItem('todos'));
    if (myTodos !== null) {
      this.props.getTodos(myTodos);
    }
  }









}
