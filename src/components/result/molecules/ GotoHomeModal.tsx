import styled from '@emotion/styled';
import Modal from 'react-modal';
import ModalStyle from '../../../styles/modalStyle';

const ModalWrapper = styled.div``;

const ModalTitle = styled.p`
  font-family: 'Pretendard';
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  margin-top: 40px;
`;

const ModalCancelBtn = styled.button`
  display: block;
  width: 282px;
  height: 42px;
  margin: 0 auto;
  margin-top: 9px;
  background-color: #ebebeb;
  opacity: 0.8;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 13px;
  color: black;
  cursor: pointer;
`;

const ModalBackBtn = styled.button`
  display: block;
  width: 282px;
  height: 42px;
  margin: 0 auto;
  margin-top: 32px;
  background-color: #fd6463;
  border-radius: 10px;
  font-weight: 800;
  font-size: 13px;
  color: white;
  border: none;
  cursor: pointer;
`;

interface GoToHomeModalProps {
  isOpen: boolean;
  onBackClick: () => void;
  onCancelClick: () => void;
}

const GotoHomeModal = ({
  isOpen,
  onBackClick,
  onCancelClick,
}: GoToHomeModalProps) => {
  return (
    <Modal isOpen={isOpen} style={ModalStyle} ariaHideApp={false}>
      <ModalWrapper>
        <ModalTitle>처음으로 돌아가시겠어요?</ModalTitle>
        <ModalBackBtn onClick={onBackClick}>돌아가기</ModalBackBtn>
        <ModalCancelBtn onClick={onCancelClick}>취소</ModalCancelBtn>
      </ModalWrapper>
    </Modal>
  );
};

export default GotoHomeModal;
