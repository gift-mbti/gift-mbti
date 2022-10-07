import styled from '@emotion/styled';

const Image2 = styled.div`
  position: absolute;
  width: 76px;
  height: 59px;
  left: 45px;
  top: 92px;
  background: url('/img/image 3.svg');
`;

const Image3 = styled(Image2)`
  background: url('/img/image 2.svg');
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  gap: 19px;
`;
const SmallCard = styled.div`
  position: absolute;
  width: 136px;
  height: 204px;
  top: 34px;

  background: #ffffff;
  box-shadow: 0px 10px 35px rgba(120, 120, 120, 0.25);
  border-radius: 10px;
`;
const SmallCard2 = styled(SmallCard)`
  left: 155px;
`;

const SmallCardTitle = styled.p`
  position: absolute;
  left: 20px;
  top: 20px;

  // 디자인: 82px면 다음줄로 넘어감
  width: 83px;
  height: 18px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  /* identical to box height, or 18px */

  color: #000000;
`;
const SmallCardText = styled.p`
  position: absolute;
  width: 73px;
  height: 32px;
  left: 20px;
  top: 48px;

  white-space: pre-wrap;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  /* or 14px */

  color: #000000;
`;
const DetailButton = styled.button`
  position: absolute;
  width: 100%;
  height: 39px;
  top: 165px;
  background: ${(props) => props.color};
  border: none;
  border-radius: 0px 0px 10px 10px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  :hover {
    background-color: #cccccc;
  }
`;

const Cards = ({ best, worst, buttonColor }: any) => {
  return (
    <CardContainer>
      <SmallCard>
        <SmallCardTitle>환상의 캐미</SmallCardTitle>
        <SmallCardText>{best}</SmallCardText>
        <Image2 />
        <DetailButton color={buttonColor}>자세히 보기</DetailButton>
      </SmallCard>
      <SmallCard2>
        <SmallCardTitle>파국의 캐미</SmallCardTitle>
        {/* 파국이 없을 떈 크기, 이미지 변경 */}
        <SmallCardText>{worst}</SmallCardText>
        <Image3 />
        <DetailButton color={buttonColor}>자세히 보기</DetailButton>
      </SmallCard2>
    </CardContainer>
  );
};

export default Cards;
