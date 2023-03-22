import styled from 'styled-components';

export const SectionTitle = styled.h3`
  font-size: 32px;
  line-height: 42px;

  color: ${({ theme }) => theme.colors.text.title};
  text-align: center;
`;

export const SectionWrapper = styled.div`
  position: relative;

  form {
    width: 335px;
  }
`;

export const ListItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
