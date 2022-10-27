import React, { Component } from 'react';
import Counter from './conponents/Counter';
import Dropdown from './conponents/Dropdown';
import ColorPicker from './conponents/ColorPicker';
import TodoList from 'conponents/TodoList';
import initialTodos from './todos.json';

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
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    return (
      <>
        <h1>Стан компонента</h1>
        <div>
          <p>Загальна кількість ToDo: {totalTodoCount}</p>
          <p>Кількість виконаних ToDo: {completedTodoCount}</p>
        </div>
        <TodoList todos={todos} onDeletTodo={this.deleteTodo} />
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Dropdown /> */}
        {/* <Counter initialValue={10} /> */}
      </>
    );
  }
}

export default App;
