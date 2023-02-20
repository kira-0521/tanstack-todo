import './App.css';
import { useQueryTodos } from './hooks/useQueryTodos';

function App() {
  const { data } = useQueryTodos();
  return (
    <div className="App">
      <ul className="flex justify-center mt-6">
        {data?.map((todo) => (
          <li
            key={todo.id}
            className="card w-96 bg-primary text-primary-content"
          >
            <h3 className="card-title">{todo.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
