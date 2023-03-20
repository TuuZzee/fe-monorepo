import React, { FC } from 'react';

import { Button, List } from 'rsuite';

import { useAppDispatch } from '../../redux/hooks';
import { TodoItem as TodoItemType, removeTodo } from '../../redux/slices/todos';

interface TodoItemProps {
  todo: TodoItemType;
}

const TodoItem: FC<TodoItemProps> = function ({ todo }) {
  const dispatch = useAppDispatch();

  return (
    <List.Item style={{ listStyle: 'none' }}>
      {todo.text}
      <Button onClick={() => dispatch(removeTodo(todo.id))} type="button">
        x
      </Button>
    </List.Item>
  );
};

export default TodoItem;
