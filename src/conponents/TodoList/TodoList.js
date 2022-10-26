import React from 'react';
import './TodoList.css';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(({ id, text }) => (
      <li key={id}>
        <p>{text}</p>
        <button>Del</button>
      </li>
    ))}
  </ul>
);

export default TodoList;

//1;40
