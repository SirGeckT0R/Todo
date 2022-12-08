import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  render() {
    return (
      <div className='form'>
        <input
          type='text'
          value={this.props.inputValue}
          onChange={this.props.onInputChange}
          placeholder='Enter todo name'
        />
        <button
          onClick={this.props.onButtonClick}
          disabled={this.props.addButtonDisabled}>
          Add
        </button>
      </div>
    );
  }
}
