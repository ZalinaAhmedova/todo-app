import { useState } from 'react';
import './App.css';
import Form from './components/Form.jsx'
import List from './components/List.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodos = (value) => {
    if (value) {
      setTodos([...todos, {text: value, done: false, id: Math.random().toString(36).substring(2)}]);
    }
  }
  
  const handleRemoveTodo = (id) => {
    setTodos(todos.filter(todo => {
      if (todo.id !== id) {
        return todo;
      }
    }));
  }

  const handleRemoveAllTodo = () => {
    setTodos([]);
  }

  return (
    <div className='container'>
      <h1>Todo App</h1>
      <Form addTodos={handleAddTodos}/>
      <List todos={todos} removeTodo={handleRemoveTodo}/>
      <div className='info'>
        <p>You have 3 pending tasks</p>
        <button className='button' onClick={handleRemoveAllTodo}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
