import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeletTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList__item">
        <p className="TodoList__text">{text}</p>
        <button className="TodoList__button" onClick={() => onDeletTodo(id)}>
          Del
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;

//1;40
