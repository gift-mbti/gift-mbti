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
}

const Button = ({ color, text, type }: IButton) => {
  const result =
    type === 'defult' ? (
      <BasicButton color={color}>{text}</BasicButton>
    ) : (
      <ColorReverseButton color={color}>{text}</ColorReverseButton>
    );
  return result;
};

export default Button;