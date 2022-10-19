import styled from '@emotion/styled';

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
  onButtonClick: () => void;
}

// jaman - 처음으로 돌아가시겠습니까?
const FixedButton = ({ text, onButtonClick }: IButton) => {
  const result = <Button onClick={onButtonClick}>{text}</Button>;

  return result;
};

export default FixedButton;
