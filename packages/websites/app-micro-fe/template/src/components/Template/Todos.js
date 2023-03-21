import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Divider, FlexboxGrid, Form, List } from 'rsuite';

import { Input, LargeButton } from '@namespace/storybook/src/components/atoms';

import { addTodo, removeTodo } from '../../redux/modules/todosTemplate';

import TodoItem from './TodoItem';

const Todo = function ({ todos }) {
  const dispatch = useDispatch();

  const [text, changeText] = useState('');

  const handleAddTodo = () => {
    if (text !== '') {
      dispatch(addTodo(text));
      changeText('');
    }
  };

  const handleTextChange = value => {
    changeText(value);
  };

  return (
    <div>
      <Divider />
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colSpan={6}>
          <Form onSubmit={handleAddTodo}>
            <Form.Group>
              <Input
                helperText="Required"
                label="Add ToDo:"
                name="add-todo"
                onChange={handleTextChange}
                placeholder=""
                value={text}
              />
            </Form.Group>
            <Form.Group>
              <LargeButton onClick={handleAddTodo}>Submit</LargeButton>
            </Form.Group>
          </Form>
          <br />
          <div>
            <List>
              {todos.map((todo, i) => (
                <TodoItem
                  handleClick={() => dispatch(removeTodo(todo))}
                  key={`#${i.toString()}-todo`}
                  todo={todo}
                />
              ))}
            </List>
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <Divider />
    </div>
  );
};

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
};

Todo.defaultProps = { todos: [] };

export default connect(({ todosTemplate }) => ({ todos: todosTemplate }))(Todo);
