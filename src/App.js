import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODO } from './features/todoSlice.js';
import './App.css';
import Form from './components/Form/Form.jsx'
import List from './components/List/List.jsx'
import Info from './components/Info/Info.jsx';

function App() {
  const todos = useSelector((state) => state.todo.todos)

  const dispatch = useDispatch();

  const handleAddTodo = (value) => {
    if (value) {
      dispatch(ADD_TODO(value));
    }
  }

  const handleRemoveTodo = (id) => {
    dispatch(REMOVE_TODO(id));
  }

  const handleRemoveAllTodo = () => {
    dispatch(REMOVE_ALL_TODO());
  }

  return (
    <div className='container'>
      <h1 className="title">Todo App</h1>
      <Form addTodos={handleAddTodo}/>
      <List todos={todos} removeTodo={handleRemoveTodo}/>
      <Info removeAllTodo={handleRemoveAllTodo}/>
    </div>
  );
}

export default App;
