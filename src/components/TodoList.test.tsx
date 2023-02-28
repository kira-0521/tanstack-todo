import { render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';

describe('Todo一覧のテスト', () => {
  test('初期表示でボタンの文字が「Create!!」となっていること', () => {
    render(<TodoList />);
    expect(screen.getByRole('button')).toHaveTextContent('Create!!');
  });
});
