import styled from 'styled-components';

export const PostsTitle = styled.h3`
  font-size: 32px;
  line-height: 42px;

  color: ${({ theme }) => theme.colors.text.title};
  text-align: center;
`;

export const PostsWrapper = styled.div`
  position: relative;

  form {
    width: 335px;
  }
`;
