import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { Divider, FlexboxGrid, Form } from 'rsuite';

import { LargeButton } from '@namespace/storybook/src/components/atoms';

import { addTodo, removeTodo } from '../../redux/modules/todosTemplate';

import { FormInput, List, TemplateTitle, TemplateWrapper } from './styled';

const Template = function ({ todos }) {
  const intl = useIntl();
  const dispatch = useDispatch();

  const [text, changeText] = useState('');

  const handleAddTodo = () => {
    if (text !== '') {
      dispatch(addTodo(text));
      changeText('');
    }
  };

  return (
    <TemplateWrapper>
      <TemplateTitle>{intl.messages['template.title']}</TemplateTitle>
      <div>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colSpan={6}>
            <Form onSubmit={handleAddTodo}>
              <Form.Group>
                <FormInput
                  helperText="Required"
                  label="Add ToDo:"
                  name="add-todo"
                  onChange={value => changeText(value)}
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
                  <List.Item key={`#${i.toString()}-todo`} style={{ listStyle: 'none' }}>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo))} type="button">
                      x
                    </button>
                  </List.Item>
                ))}
              </List>
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <Divider />
      </div>
    </TemplateWrapper>
  );
};

Template.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })).isRequired,
};

export default connect(({ todosTemplate }) => ({ todos: todosTemplate }))(Template);
