import './App.css';
import { useQueryTodo } from './hooks/useQueryTodos';

function App() {
  const { data } = useQueryTodo();
  return (
    <div className="App">
      <p>hello</p>
      <ul>
        {data?.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
