import styled from '@emotion/styled';

interface TagStyleProps {
  color: string;
  border: string;
}

const Tags = styled.div<TagStyleProps>`
  padding: 5px 10px;
  gap: 10px;
  margin: auto;

  box-sizing: border-box;
  border: 1.5px solid ${(props) => props.border};
  border-radius: 18px;
  justify-content: center;
  font-weight: 800;
  font-size: 12px;
  line-height: 148%;
  letter-spacing: 0.02em;
  background-color: white;
  color: ${(props) => props.color};
`;

interface TagProps {
  color: string;
  borderColor: string;
  text: string;
}
const Tag = ({ color, borderColor, text }: TagProps) => {
  return (
    <Tags color={color} border={borderColor}>
      {text}
    </Tags>
  );
};

export default Tag;
