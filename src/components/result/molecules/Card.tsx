import Image from 'next/image';
import styled from '@emotion/styled';
import Tag from '../atoms/Tag';

const Container = styled.section`
  position: relative;
  width: 279px;
  height: 389px;
  left: 48px;
  top: 34px;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(106, 106, 106, 0.25);
  border-radius: 20px;
`;

const CardTitle = styled.div`
  position: relative;
  padding: 30px 26px 10px;
  font-weight: 800;
  font-size: 25px;
  letter-spacing: 0.02em;
  z-index: 1;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 63px;
  left: 26px;
`;

const QR = styled.img`
  position: absolute;
  left: 228px;
  right: 40.45%;
  top: 7.46%;
  bottom: 91.37%;
`;

export const TagTitle = styled.div`
  position: absolute;
  top: 248px;
  left: 26px;
  width: 25px;
  height: 14px;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  color: #393939;
`;

export const TagContainer = styled.div`
  position: absolute;
  left: 26px;
  top: 274px;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const CardText = styled.p`
  position: absolute;
  width: 200px;
  height: 30px;
  top: 322px;
  left: 26px;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #929090;
`;

interface CardProps {
  name: string;
  cardImg: string;
  tags: string[];
  color: string;
}

const Card = ({ name, cardImg, tags, color }: CardProps) => {
  return (
    <Container>
      <CardTitle>{name}</CardTitle>
      <QR src="/img/Vector.svg" alt="result_card" />
      <ImageContainer>
        <Image src={cardImg} width={227} height={200} alt="avatar" />
      </ImageContainer>
      <TagTitle>태그</TagTitle>
      <TagContainer>
        {tags.map((tag: string, index: number) => (
          <Tag key={index} borderColor={color} color={color} text={tag} />
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
