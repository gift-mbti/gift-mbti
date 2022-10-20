import { useState } from 'react';
import styled from '@emotion/styled';
import GotoHomeModal from '../molecules/ GotoHomeModal';

const Container = styled.div`
  position: fixed;
  bottom: 14px;
  width: 375px;
  height: 70px;
  z-index: 2;
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  margin: 14px 42px;
  justify-content: center;
  align-items: center;
  width: 291px;
  height: 54px;
  border: none;
  background: #000000;
  border-radius: 15px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;

interface ButtonProps {
  text: string;
}

// jaman - 처음으로 돌아가시겠습니까?
const FixedButton = ({ text }: ButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onhandleOpen = () => {
    setIsOpen(true);
  };
  return (
    <Container>
      <Button onClick={onhandleOpen}>{text}</Button>
      <GotoHomeModal
        isOpen={isOpen}
        onhandleOpen={() => {
          setIsOpen(false);
        }}
      />
    </Container>
  );
};

export default FixedButton;
