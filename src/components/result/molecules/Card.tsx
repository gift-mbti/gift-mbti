import styled from '@emotion/styled';
import Tag from '../atoms/Tag';

const Container = styled.section`
  position: absolute;
  width: 279px;
  height: 389px;
  left: 48px;
  top: 46px;

  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(106, 106, 106, 0.25);
  border-radius: 20px;
`;

const CardTitle = styled.div`
  position: relative;
  margin: 30px 26px 14px;
  height: 55px;

  font-weight: 800;
  font-size: 25px;
  letter-spacing: 0.02em;
`;

const Image = styled.img`
  position: relative;
  width: 200px;
  height: 140px;
  margin: 18px 53px 0px;
`;

const QR = styled.img`
  position: absolute;
  left: 228px;
  right: 40.45%;
  top: 7.46%;
  bottom: 91.37%;
`;

export const TagTitle = styled.div`
  position: relative;
  width: 25px;
  height: 14px;
  margin: 5px 26px;

  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  color: #393939;
`;

export const TagContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 5px;

  margin: 12px 0px 0px 26px;
`;

// 디자인 : 줄간격이 이상함
const CardText = styled.p`
  position: relative;
  width: 200px;
  height: 30px;
  margin: 60px 26px 0;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #929090;
`;

const Card = ({ name, cardImg, tags, color }: any) => {
  return (
    <Container>
      <CardTitle>{name}</CardTitle>
      <QR src="/img/Vector.svg" alt="result_card" />
      <Image src={cardImg} />
      <TagTitle>태그</TagTitle>
      <TagContainer>
        {tags.map((tag: string, index: number) => (
          <Tag key={index} color={color} text={tag} />
        ))}
      </TagContainer>
      <CardText>
        전시된 핸드폰으로 본인의 유형 카드를
        <br />
        인식하면 AR로 캐릭터를 만나볼 수 있어요!
      </CardText>
    </Container>
  );
};

export default Card;
