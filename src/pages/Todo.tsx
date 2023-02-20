import { FC, Suspense } from 'react';
import { TodoList } from '../components/TodoList';

export const Todo: FC = () => {
  return (
    <Suspense fallback={<progress className="progress w-56"></progress>}>
      <TodoList />
    </Suspense>
  );
};
