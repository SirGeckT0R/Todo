import React, { Component } from 'react';
import './Todo.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOver: false,
    };
  }
  render() {
    return (
      <div
        className={'todo ' + (this.props.done ? 'done' : '')}
        onMouseEnter={this.showDeleteButton}
        onMouseLeave={this.hideDeleteButton}>
        <input id={this.props.id} type='checkbox' onChange={this.handleCheck} />
        <label htmlFor={this.props.id}>{this.props.name}</label>
        {this.state.isOver && (
          <button
            className='delete'
            onClick={() => this.props.onDelete(this.props.id)}>
            Delete
          </button>
        )}
      </div>
    );
  }

  handleCheck = (e) => {
    const done = e.target.checked;
    this.props.onCheck(done, this.props.id);
  };

  handleDelete = (isOver) => {
    this.setState({ isOver: isOver });
  };

  showDeleteButton = () => this.handleDelete(true);
  hideDeleteButton = () => this.handleDelete(false);
}
