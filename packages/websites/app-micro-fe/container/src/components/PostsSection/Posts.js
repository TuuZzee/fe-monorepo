import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider, FlexboxGrid, Form, List } from 'rsuite';

import { Input, Button } from '@namespace/storybook/src/components/atoms';

import { addPost, removePost } from '../../redux/modules/posts';

import PostItem from './PostItem';

const Post = function ({ posts }) {
  const [text, changeText] = useState('');

  const handleAddPost = () => {
    if (text !== '') {
      addPost(text);
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
          <Form onSubmit={handleAddPost}>
            <Form.Group>
              <Input
                helperText="Required"
                label="Add ToDo:"
                name="addPostInput"
                onChange={handleTextChange}
                placeholder=""
                value={text}
              />
            </Form.Group>
            <Form.Group>
              <Button onClick={handleAddPost}>Submit</Button>
            </Form.Group>
          </Form>
          <br />
          <div>
            <List>
              {posts.map((todo, i) => (
                <PostItem key={`#${i.toString()}-todo`} remove={removePost} todo={todo} />
              ))}
            </List>
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <Divider />
    </div>
  );
};

Post.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
};

Post.defaultProps = { posts: [] };

export default connect(({ posts }) => ({ posts }), { addPost, removePost })(Post);
