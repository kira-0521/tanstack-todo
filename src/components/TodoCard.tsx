import { FC } from 'react';

type Props = {
  title: string;
  completed: boolean;
  onClickChoice: () => void;
  onClickDelete: () => void;
};

export const TodoCard: FC<Props> = ({
  title,
  completed,
  onClickChoice,
  onClickDelete,
}) => {
  return (
    <div className="card w-64 bg-neutral text-primary-content">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <span className="badge badge-accent">
          {completed ? '完了' : '未完了'}
        </span>
        <button className="btn btn-info" onClick={onClickChoice}>
          選択
        </button>
        <button className="btn btn-error" onClick={onClickDelete}>
          削除
        </button>
      </div>
    </div>
  );
};
