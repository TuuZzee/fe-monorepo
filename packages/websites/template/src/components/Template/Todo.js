import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider, FlexboxGrid, Form, List } from 'rsuite';

import { Button, Input } from '@namespace/storybook/src/components/atoms';

import { addTodo, removeTodo } from '../../redux/modules/todosTemplate';

import TodoItem from './TodoItem';

const Todo = function ({ todosTemplate }) {
  const [text, changeText] = useState('');

  const handleAddTodo = () => {
    if (text !== '') {
      addTodo(text);
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
            <Form.Group style={{ width: '300px' }}>
              <Input
                helperText="Required"
                label="Add ToDo:"
                name="addTodoInput"
                onChange={handleTextChange}
                placeholder=""
                value={text}
              />
            </Form.Group>
            <Form.Group>
              <Button onClick={handleAddTodo}>Submit</Button>
            </Form.Group>
          </Form>
          <br />
          <div>
            <List>
              {todosTemplate.map((todo, i) => (
                <TodoItem key={`#${i.toString()}-todo`} remove={removeTodo} todo={todo} />
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
  todosTemplate: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
};

Todo.defaultProps = {
  todosTemplate: [],
};

export default connect(({ todosTemplate }) => ({ todosTemplate }), { addTodo, removeTodo })(Todo);
