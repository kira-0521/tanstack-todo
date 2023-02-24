import { FC, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { TodoList } from '../components/TodoList';

export const Todo: FC = () => {
  return (
    <ErrorBoundary
      FallbackComponent={({ error }) => <div>{error.message}</div>}
    >
      <Suspense fallback={<progress className="progress w-56"></progress>}>
        <TodoList />
      </Suspense>
    </ErrorBoundary>
  );
};
