import React from 'react';
import './App.css';
import Form from './Form';
import TodoCollection from './TodoCollection';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: [
        { done: false, name: 'One', id: getRandomId() },
        { done: false, name: 'Two', id: getRandomId() },
      ],
      addButtonDisabled: true,
    };
  }

  render() {
    const todos = this.state.todos;
    const amountOfTodos = todos.length;
    const amountOfDone = todos.filter((entry) => entry.done === true).length;
    return (
      <div className='main'>
        <h1>ToDo</h1>
        <Counter numTodos={amountOfTodos} done={amountOfDone} />
        <Form
          inputValue={this.state.inputValue}
          onInputChange={this.handleSetName}
          onButtonClick={this.handleAddNewEntry}
          addButtonDisabled={this.state.addButtonDisabled}
        />
        <TodoCollection
          todos={todos}
          onCheck={this.handleSetDone}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }

  handleSetName = (e) => {
    const value = e.target.value.trimStart();
    this.setState({
      inputValue: value,
      addButtonDisabled: value === '',
    });
  };

  handleAddNewEntry = () => {
    if (this.state.inputValue === '') {
      return;
    }
    const id = getRandomId();
    const entry = {
      done: false,
      name: this.state.inputValue,
      id,
    };
    this.setState((state) => ({
      inputValue: '',
      todos: state.todos.concat([entry]),
      addButtonDisabled: true,
    }));
  };

  handleSetDone = (newDone, id) => {
    this.setState((state) => ({
      todos: state.todos.map((entry) =>
        entry.id === id ? { ...entry, done: newDone } : entry
      ),
    }));
  };

  handleDelete = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((entry) => entry.id !== id),
    }));
  };
}

function getRandomId() {
  return (
    new Date().getTime().toString() + Math.trunc(Math.random() * 100).toString()
  );
}

export default App;
