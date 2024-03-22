import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, removeAllTodo } from './features/todoSlice.js';
import './App.css';
import Form from './components/Form/Form.jsx'
import List from './components/List/List.jsx'
import Info from './components/Info/Info.jsx';

function App() {
  const todos = useSelector((state) => state.todo.todos)
  const count = useSelector((state) => state.todo.count)

  const dispatch = useDispatch();

  const handleAddTodo = (value) => {
    if (value) {
      dispatch(addTodo(value));
    }
  }

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  }

  const handleRemoveAllTodo = () => {
    dispatch(removeAllTodo());
  }

  return (
    <div className='container'>
      <h1 className="title">Todo App</h1>
      <Form addTodos={handleAddTodo}/>
      <List todos={todos} removeTodo={handleRemoveTodo}/>
      <Info removeAllTodo={handleRemoveAllTodo} todosCount={count}/>
    </div>
  );
}

export default App;
