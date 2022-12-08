import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
  render() {
    const notDone = this.props.numTodos - this.props.done;
    return (
      <ul className='counter'>
        <li>Amount of tasks: {this.props.numTodos}</li>
        <li>Done: {this.props.done}</li>
        <li>Not done: {notDone}</li>
      </ul>
    );
  }
}
