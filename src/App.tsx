import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Todo } from './pages/Todo';

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="flex justify-center items-center gap-6 mt-6">
          <Link to="/" className="link link-accent">
            Home
          </Link>
          <Link to="/todo" className="link link-accent">
            Todo
          </Link>
        </header>
        <div className="mt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
