import React, { Component } from 'react';
import Counter from './conponents/Counter';
import Dropdown from './conponents/Dropdown';
import ColorPicker from './conponents/ColorPicker';
import Container from 'conponents/Container';
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
    name: '',
    tag: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            SecondName
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Отправить</button>
        </form>
        {/* <h1>Стан компонента</h1> */}
        {/* <div>
          <p>Загальна кількість ToDo: {totalTodoCount}</p>
          <p>Кількість виконаних ToDo: {completedTodoCount}</p>
        </div>
        <TodoList todos={todos} onDeletTodo={this.deleteTodo} /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Dropdown /> */}
        {/* <Counter initialValue={10} /> */}
      </Container>
    );
  }
}

export default App;

//18
