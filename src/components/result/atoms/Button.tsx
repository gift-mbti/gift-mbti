import styled from '@emotion/styled';
import Link from 'next/link';

const BasicButton = styled.button`
  box-sizing: border-box;
  margin: auto;
  width: 291px;
  height: 62px;

  border-radius: 15px;
  border: 2px solid ${(props) => props.color};
  color: ${(props) => props.color};
  background: #ffffff;

  font-family: 'Pretendard Variable', sans-serif;
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

interface ButtonProps {
  color: string;
  text: string;
  type: string;
  onButtonClick?: () => void;
}

const Button = ({ onButtonClick, color, text, type }: ButtonProps) => {
  const result =
    type === 'defult' ? (
      <Link href="/results/1">
        <BasicButton color={color}>{text}</BasicButton>
      </Link>
    ) : (
      <ColorReverseButton onClick={onButtonClick} color={color}>
        {text}
      </ColorReverseButton>
    );
  return result;
};

export default Button;
