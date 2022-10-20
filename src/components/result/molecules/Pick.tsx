import styled from '@emotion/styled';
import PickSign from '../atoms/PickSign';
import Gifts from './Gifts';

const Wrapper = styled.section`
  position: relative;
`;

const Caution = styled.div`
  margin-top: 15px;
  text-align: center;
  font-weight: 500;
  font-size: 10px;
  line-height: 100%;
  color: #bbb6b6;
`;

// atom으로 빼기
const Title3 = styled.div`
  margin-top: 60px;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  color: #929090;
`;

const Title4 = styled(Title3)`
  margin-top: 10px;
  font-weight: 800;
  font-size: 22px;
  line-height: 100%;
  color: #000000;
`;

interface PickProps {
  midName: string;
  color: string;
  bgColor: string;
  borderColor: string;
  gift: string[];
  giftTag: string[];
}
const Pick = ({
  midName,
  color,
  bgColor,
  borderColor,
  gift,
  giftTag,
}: PickProps) => {
  return (
    <Wrapper>
      <Title3>{midName}</Title3>
      <Title4>어떤 선물을 주고 받을까요? </Title4>
      <PickSign color={color} />
      <Gifts
        borderColor={borderColor}
        bgColor={bgColor}
        color={color}
        gift={gift}
        giftTag={giftTag}
      />
      <Caution>*자체 설문조사를 통해 자료를 수집하였습니다.</Caution>
    </Wrapper>
  );
};

export default Pick;
