import { CreateTodoDTO, Todo, UpdateTodoDTO } from '../../@types';
import { axiosApi } from '../packages';

export const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await axiosApi.get<Todo[]>('todos');
  return data;
};

export const createTodo = async (
  createTodoDTO: CreateTodoDTO
): Promise<Todo> => {
  const { data } = await axiosApi.post<Todo>('todos', {
    ...createTodoDTO,
    completed:
      createTodoDTO?.completed === undefined ? false : createTodoDTO?.completed,
  });
  return data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axiosApi.delete(`todos/${id}`);
};

export const updateTodo = async (
  updateTodoDTO: UpdateTodoDTO
): Promise<Todo> => {
  const { data } = await axiosApi.put(`todos/${updateTodoDTO.id}`, {
    title: updateTodoDTO.title,
    completed:
      updateTodoDTO?.completed === undefined ? false : updateTodoDTO?.completed,
  });
  return data;
};
