import React from 'react';

import PropTypes from 'prop-types';
import { Button, List } from 'rsuite';

const PostItem = function ({ post, remove }) {
  return (
    <List.Item style={{ listStyle: 'none' }}>
      {post.text}
      <Button onClick={() => remove(post)} type="button">
        x
      </Button>
    </List.Item>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({ text: PropTypes.string }),
  remove: PropTypes.func.isRequired,
};

PostItem.defaultProps = { post: {} };

export default PostItem;
