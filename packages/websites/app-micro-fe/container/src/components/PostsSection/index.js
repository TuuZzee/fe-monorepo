import React from 'react';

import { useIntl } from 'react-intl';
import { connect } from 'react-redux';

import Posts from './Posts';
import { PostsTitle, PostsWrapper } from './styled';

const PostsSection = function () {
  const intl = useIntl();

  return (
    <PostsWrapper>
      <PostsTitle>{intl.messages['template.title']}</PostsTitle>
      <Posts />
    </PostsWrapper>
  );
};

export default connect()(PostsSection);
