import { ChangeEvent, FC, useState } from 'react';
import { useMutateTodos } from '../hooks/useMutateTodos';
import { useQueryTodos } from '../hooks/useQueryTodos';
import { TodoCard } from './TodoCard';

export const TodoList: FC = () => {
  const [input, setInput] = useState('');
  const [checked, setChecked] = useState(false);
  const [currentId, setCurrentId] = useState<number | undefined>(undefined);

  const reset = () => {
    setInput('');
    setChecked(false);
    setCurrentId(undefined);
  };

  const { data } = useQueryTodos();
  const { createTodoMutation, deleteTodoMutation, updateTodoMutation } =
    useMutateTodos();

  const handleSubmit = () => {
    if (!input) {
      alert('Titleが入力されていません。');
      return;
    }
    createTodoMutation.mutate({ title: input, completed: checked });
    reset();
  };

  const handleDelete = (id: number) => {
    deleteTodoMutation.mutate(id);
  };

  const handleChoice = (id: number) => {
    if (!data) return;
    setCurrentId(id);
    setInput(data.find((todo) => todo.id === currentId)?.title || '');
    setChecked(data.find((todo) => todo.id === currentId)?.completed || false);
  };

  const handleUpdate = () => {
    if (!currentId || !input) return;
    updateTodoMutation.mutate({
      id: currentId,
      title: input,
      completed: checked,
    });
    reset();
  };

  return (
    <div>
      <ul className="flex justify-center mt-6 gap-6">
        {data?.map((todo) => (
          <li key={todo.id}>
            <TodoCard
              title={todo.title}
              completed={todo.completed}
              onClickChoice={() => handleChoice(todo.id)}
              onClickDelete={() => handleDelete(todo.id)}
            />
          </li>
        ))}
      </ul>
      <div className="form-control w-6/12 mx-auto mt-6">
        <label className="label cursor-pointer">
          <span className="label-text">Title</span>
          <input
            type="text"
            className="input"
            placeholder="ex. Title"
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            className="checkbox"
            checked={checked}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setChecked(e.target.checked)
            }
          />
        </label>
        <button
          className="btn btn-secondary btn-outline"
          onClick={() => (currentId ? handleUpdate() : handleSubmit())}
        >
          {currentId ? 'Update!!' : 'Create!!'}
        </button>
      </div>
    </div>
  );
};
