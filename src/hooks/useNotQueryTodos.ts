import { useEffect, useState } from 'react';
import { Todo } from '../@types';
import { fetchTodos } from '../libs/api';

export const useNotQueryTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const _initAsync = async () => {
    try {
      setIsLoading(true);
      const fetchData = await fetchTodos();
      setTodos(fetchData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    _initAsync();
  }, []);

  return {
    todos,
    error,
    isLoading,
  };
};
