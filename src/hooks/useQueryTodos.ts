import { useQuery } from '@tanstack/react-query';
import { Todo } from '../@types';
import { fetchTodos } from '../libs/api';

export const useQueryTodos = () => {
  return useQuery<Todo[]>(['todo'], {
    queryFn: fetchTodos,
  });
};
