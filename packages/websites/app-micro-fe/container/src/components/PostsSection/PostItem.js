import React from 'react';

import PropTypes from 'prop-types';
import { Button, List } from 'rsuite';

const PostItem = function ({ post, handleClick }) {
  return (
    <List.Item style={{ listStyle: 'none' }}>
      {post.text}
      <Button onClick={handleClick} type="button">
        x
      </Button>
    </List.Item>
  );
};

PostItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  post: PropTypes.shape({ text: PropTypes.string }).isRequired,
};

export default PostItem;
