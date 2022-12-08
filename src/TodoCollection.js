import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoCollection extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((entry) => (
          <Todo
            name={entry.name}
            done={entry.done}
            key={entry.id}
            id={entry.id}
            onCheck={this.props.onCheck}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}
