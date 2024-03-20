import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form.jsx'
import List from './components/List/List.jsx'
import Info from './components/Info/Info.jsx';

function App() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState(0);

  const handleAddTodo = (value) => {
    if (value) {
      setTodos([...todos, {text: value, done: false, id: Math.random().toString(36).substring(2)}]);
      setAllTodos(allTodos + 1);
    }
  }
  
  console.log(todos);

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter(todo => {
      if (todo.id !== id) {
        return todo;
      }
    }));
    setAllTodos(allTodos - 1);
  }

  const handleRemoveAllTodo = () => {
    setTodos([]);
    setAllTodos(0);
  }

  return (
    <div className='container'>
      <h1 className="title">Todo App</h1>
      <Form addTodos={handleAddTodo}/>
      <List todos={todos} removeTodo={handleRemoveTodo}/>
      <Info removeAllTodo={handleRemoveAllTodo} todosCount={allTodos}/>
    </div>
  );
}

export default App;
