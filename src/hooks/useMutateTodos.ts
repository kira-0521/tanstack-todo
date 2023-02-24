import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo } from '../@types';
import { createTodo, deleteTodo, updateTodo } from '../libs/api';

export const useMutateTodos = () => {
  const client = useQueryClient();
  const createTodoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess(data) {
      client.setQueryData<Todo[]>(['todo'], (prev) => [...(prev || []), data]);
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess(_, variables) {
      client.setQueryData<Todo[]>(['todo'], (prev) =>
        prev?.filter((todo) => todo.id !== variables)
      );
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess(data, variables) {
      client.setQueryData<Todo[]>(['todo'], (prev) => {
        if (!prev) return [];
        return prev?.map((todo) => {
          if (todo.id === data.id) {
            return data;
          }
          return todo;
        });
      });
    },
  });

  return {
    createTodoMutation,
    deleteTodoMutation,
    updateTodoMutation,
  };
};
