import { FC } from 'react';
import { useQueryTodos } from '../hooks/useQueryTodos';
import { TodoCard } from './TodoCard';

export const TodoList: FC = () => {
  const { data } = useQueryTodos();
  return (
    <ul className="flex justify-center mt-6">
      {data?.map((todo) => (
        <li key={todo.id}>
          <TodoCard title={todo.title} />
        </li>
      ))}
    </ul>
  );
};
