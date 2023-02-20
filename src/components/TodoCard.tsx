import { FC } from 'react';

type Props = {
  title: string;
};

export const TodoCard: FC<Props> = ({ title }) => {
  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
};
