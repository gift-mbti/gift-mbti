import { useState } from 'react';
import styled from '@emotion/styled';
import GotoHomeModal from '../molecules/ GotoHomeModal';

const Button = styled.button`
  cursor: pointer;
  position: fixed;
  left: 37.86%;
  right: 37.77%;
  top: 91.85%;
  bottom: 1.68%;
  border: none;
  background: #000000;
  border-radius: 15px;
  z-index: 1;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;

interface IButton {
  text: string;
}

// jaman - 처음으로 돌아가시겠습니까?
const FixedButton = ({ text }: IButton) => {
  const [isOpen, setIsOpen] = useState(false);
  const onhandleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <Button onClick={onhandleOpen}>{text}</Button>
      <GotoHomeModal
        isOpen={isOpen}
        onhandleOpen={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export default FixedButton;
