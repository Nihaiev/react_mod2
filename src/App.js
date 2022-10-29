import React, { Component } from 'react';
import Counter from './conponents/Counter';
import Dropdown from './conponents/Dropdown';
import ColorPicker from './conponents/ColorPicker';
import Container from 'conponents/Container';
import TodoList from 'conponents/TodoList';
import initialTodos from './todos.json';
import Form from './conponents/Form';

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

  toggleCompleted = todoId => {
    console.log(todoId);
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
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
        <TodoList todos={todos} onDeletTodo={this.deleteTodo} />
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <h1>Стан компонента</h1> */}
        {/* <div>
          <p>Загальна кількість ToDo: {totalTodoCount}</p>
          <p>Кількість виконаних ToDo: {completedTodoCount}</p>
        </div>
        
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Dropdown /> */}
        {/* <Counter initialValue={10} /> */}
      </Container>
    );
  }
}

export default App;

//18
