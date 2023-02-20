import { Todo } from '../../@types';
import { axiosApi } from '../packages';

export const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await axiosApi.get<Todo[]>('todos');
  return data;
};
