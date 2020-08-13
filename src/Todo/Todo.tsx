import React, { useState } from 'react';
import '../App.css';

export default function Todo() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Buy Milk',
      isCompleted: true,
    },
    {
      id: 2,
      text: 'Go to the Salon',
      isCompleted: true,
    },
  ]);

  function handleNewTodoChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setNewTodo(e.target.value);
  }

  function handleNewTodo(e: any) {
    e.preventDefault();
    if (newTodo === '') {
      return;
    }
    setTodos([...todos, { id: Date.now(), text: newTodo, isCompleted: true }]);
    e.target.reset();
  }

  function removeTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div className="app">
      <form onSubmit={handleNewTodo} className="form">
        <h1>Todo App</h1>
        <input
          type="text"
          placeholder="Your todo..."
          onChange={handleNewTodoChange}
        />
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todos">
              {todo.text}
              <a onClick={() => removeTodo(todo.id)}>X</a>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
