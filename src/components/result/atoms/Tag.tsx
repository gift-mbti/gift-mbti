import styled from '@emotion/styled';

const Tags = styled.div`
  padding: 5px 10px;
  gap: 10px;
  margin: auto;

  box-sizing: border-box;
  border: 1.5px solid ${(props) => props.color};
  border-radius: 18px;
  justify-content: center;

  font-weight: 800;
  font-size: 12px;
  line-height: 148%;
  letter-spacing: 0.02em;
  background-color: white;
  color: ${(props) => props.color};
`;

interface ITag {
  color: string;
  text: string;
}
const Tag = ({ color, text }: ITag) => {
  return <Tags color={color}>{text}</Tags>;
};

export default Tag;
