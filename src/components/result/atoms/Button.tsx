import styled from '@emotion/styled';

const BasicButton = styled.button`
  box-sizing: border-box;
  margin: auto;
  width: 291px;
  height: 62px;
  opacity: 0.8;

  border-radius: 15px;
  border: 2px solid ${(props) => props.color};
  color: ${(props) => props.color};
  background: #ffffff;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
`;

const ColorReverseButton = styled(BasicButton)`
  border: #ffffff;
  color: #ffffff;
  background: ${(props) => props.color};
`;

interface IButton {
  color: string;
  text: string;
  type: string;
  onButtonClick?: () => void;
}

// jaman - 디자인 버튼 호버시 효과?
const Button = ({ onButtonClick, color, text, type }: IButton) => {
  const result =
    type === 'defult' ? (
      <BasicButton onClick={onButtonClick} color={color}>
        {text}
      </BasicButton>
    ) : (
      <ColorReverseButton onClick={onButtonClick} color={color}>
        {text}
      </ColorReverseButton>
    );
  return result;
};

export default Button;
