import styled from '@emotion/styled';

const PickContainer = styled.div`
  position: absolute;
  width: 76px;
  height: 48px;
  left: 243px;
  bottom: 270px;
  background: ${(props) => props.color};
  border-radius: 0px 20px 20px 18px;
  transform: matrix(1, 0, 0, -1, 0, 0);
  box-shadow: rgba(181, 181, 181, 0.35) 0px -5px 10px;
`;

const PickText = styled.p`
  position: absolute;
  width: 32px;
  height: 25px;
  left: 22px;
  top: 12px;

  font-weight: 700;
  font-size: 12px;
  line-height: 110%;
  text-align: center;

  color: #ffffff;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

interface PickSignProps {
  color: string;
}

const PickSign = ({ color }: PickSignProps) => {
  return (
    <PickContainer color={color}>
      <PickText>
        브랜드 <br />
        pick!
      </PickText>
    </PickContainer>
  );
};

export default PickSign;
