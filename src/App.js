import React, { Component } from 'react';
import Counter from './conponents/Counter';
import Dropdown from './conponents/Dropdown';
import ColorPicker from './conponents/ColorPicker';
import TodoList from 'conponents/TodoList';

const colorPickerOptions = [
  { label: 'red', color: '#f44336' },
  { label: 'green', color: '#4caf50' },
  { label: 'blue', color: '#2196f3' },
  { label: 'grey', color: '#607d88' },
  { label: 'pink', color: '#e91e63' },
  { label: 'indigo', color: '#3f51b5' },
];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Вивчити основи React', completed: false },
      { id: 'id-2', text: 'Розібратись з React Router', completed: false },
      { id: 'id-3', text: 'пережити Redux', completed: false },
    ],
  };
  render() {
    const { todos } = this.state;
    return (
      <>
        <h1>Стан компонента</h1>
        <TodoList todos={todos} />
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Dropdown /> */}
        {/* <Counter initialValue={10} /> */}
      </>
    );
  }
}

export default App;
