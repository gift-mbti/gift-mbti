import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
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
  position: absolute;
  width: 111px;
  height: 55px;
  left: 26px;
  top: 30px;
  white-space: pre-wrap;
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 100%;
  letter-spacing: 0.02em;

  color: #000000;
`;

const Image1 = styled.div`
  position: absolute;
  width: 200px;
  height: 136px;
  left: 48px;
  top: 99px;
  background: url('/img/image 1.svg');
`;

const QR = styled.img`
  position: absolute;
  left: 228px;
  right: 40.45%;
  top: 7.46%;
  bottom: 91.37%;
`;

const TagTitle = styled.div`
  position: absolute;
  width: 25px;
  height: 14px;
  left: 26px;
  top: 248px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  /* identical to box height, or 14px */
  color: #393939;
`;

const TagContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 5px;

  position: absolute;
  left: 26px;
  top: 274px;
  margin: 0;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 148%;
`;

const Tag = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 10px;
  gap: 10px;
  padding: 5px 10px;
  background: #ffffff;
  border: 1.5px solid ${(props) => props.color};
  border-radius: 18px;
  justify-content: center;
  color: ${(props) => props.color};
`;

// 디자인 : 줄간격이 이상함
const CardText = styled.div`
  position: absolute;
  width: 200px;
  height: 30px;
  left: 26px;
  top: 322px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  // 디자인: 줄 간격 물어보기!
  line-height: 150%;

  color: #929090;
`;

const ResultCard = ({ name, tags, tagColor }: any) => {
  return (
    <Card>
      <CardTitle>{name}</CardTitle>
      <QR src="/img/Vector.svg" alt="result_card" />
      <Image1 />
      <TagTitle>태그</TagTitle>
      <TagContainer>
        {tags.map((tag: string) => (
          <Tag color={tagColor}>{tag}</Tag>
        ))}
      </TagContainer>
      <CardText>
        전시된 핸드폰으로 본인의 유형 카드를
        <br />
        인식하면 AR로 캐릭터를 만나볼 수 있어요!
      </CardText>
    </Card>
  );
};

export default ResultCard;
