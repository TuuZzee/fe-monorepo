import React, { useState, FC } from 'react';

import { Divider, FlexboxGrid, Form, List, InputGroup, Input } from 'rsuite';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addTodo, TodoItem as TodoItemType } from '../../redux/slices/todos';
import { RootState } from '../../redux/store';

import TodoItem from './TodoItem';

// eslint-disable-next-line no-shadow
const Todos: FC = function () {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state: RootState) => state.todos);
  const [text, changeText] = useState('');

  const handleAddTodo = (): void => {
    if (text !== '') {
      dispatch(addTodo(text));
      changeText('');
    }
  };

  const handleTextChange = (value: string): void => {
    changeText(value);
  };

  return (
    <div>
      <Divider />
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={6}>
          <Form onSubmit={handleAddTodo}>
            <Form.Group>
              <InputGroup
                style={{
                  width: 300,
                  marginBottom: 10,
                }}
              >
                <Input
                  id="addTodoInput"
                  name="addTodoInput"
                  onChange={handleTextChange}
                  value={text}
                />
                <InputGroup.Button onClick={handleAddTodo}>+</InputGroup.Button>
              </InputGroup>
            </Form.Group>
          </Form>
          <br />
          <div>
            <List>
              {Object.values(todos).map((todo: TodoItemType) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </List>
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <Divider />
    </div>
  );
};

export default Todos;
