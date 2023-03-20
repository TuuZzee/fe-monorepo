import styled from 'styled-components';

export const TemplateTitle = styled.h3`
  font-size: 32px;
  line-height: 42px;

  color: ${({ theme }) => theme.colors.text.title};
  text-align: center;
`;

export const TemplateWrapper = styled.div`
  position: relative;
`;
