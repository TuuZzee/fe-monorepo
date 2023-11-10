import { Modal as RSuiteModal } from 'rsuite';
import styled from 'styled-components';

import { colors } from '@namespace/web-shared/styles/theme';

import Button from '../../atoms/Button';
import CloseModalIcon from '../../Icons/CloseModalIcon';

export const Modal = styled(RSuiteModal)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${props => (props.$noPadding ? '0' : '32px')};
  background: ${colors.whiteHFFFFFF};
  box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
  border-radius: 12px;
  font-size: 15px;
  line-height: 20px;
  color: ${colors.grayH495056};
`;

export const ModalHeader = styled(Modal.Header)`
  position: relative;
  margin: ${props => (props.$noPadding ? '32px 32px 0' : '0')};
`;

export const ModalBody = styled(Modal.Body)`
  overflow-x: initial !important;
  overflow-y: ${({ $isOverflowYEnabled }) => ($isOverflowYEnabled ? 'visible' : 'auto')} !important;
  max-height: 50vh !important;
`;

export const ModalActions = styled.div``;

export const CloseModalButton = styled(CloseModalIcon).attrs({
  role: 'button',
})`
  cursor: pointer;
  position: absolute;
  top: 2px;
  right: 0;
`;

export const LogoImage = styled.img`
  margin-bottom: 32px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ModalTitle = styled(RSuiteModal.Title)`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: ${colors.grayH212528};
  margin-block: auto;
  margin-bottom: 16px;
  white-space: normal;
`;

export const ConfirmButton = styled(Button)`
  width: 200px;
  min-width: auto;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  margin-top: 32px;

  ${ConfirmButton} {
    :not(:last-child) {
      margin-right: 16px;
    }
  }
`;
