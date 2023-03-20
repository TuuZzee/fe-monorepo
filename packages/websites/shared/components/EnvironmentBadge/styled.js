import { Message } from 'rsuite';
import styled from 'styled-components';

export const EnvBadgeBlock = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;

  .rs-message .rs-message-container {
    font-size: 10px;
    padding: 0.5rem;
    font-weight: 500;
  }
`;

export const EnvBadgeMessage = styled(Message)`
  position: relative;
`;
