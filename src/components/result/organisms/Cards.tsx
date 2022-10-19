import styled from '@emotion/styled';
import SmallCard from '../molecules/SmallCard';

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 19px;
  margin-bottom: 85px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

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

interface Card {
  best: string[];
  worst: string[];
  color: string;
}

const Cards = ({ best, worst, color }: Card) => {
  return (
    <CardContainer>
      <Container>
        <Title3>선물 메이트!</Title3>
        <Title4>나와의 환상/파국 궁합은? </Title4>
      </Container>
      <SmallCard chemi={best} type="best" color={color} />
      <SmallCard chemi={worst} type="worst" color={color} />
    </CardContainer>
  );
};

export default Cards;
