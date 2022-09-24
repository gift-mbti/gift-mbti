import styled from '@emotion/styled';
import SEO from '../../components/SEO';

// 내일 디자인 물어보기
const Wrapper = styled.div`
  position: absolute;
  /* width: 375px; */
  height: 2051px;
`;

const Background = styled.img``;
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
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 100%;
  /* or 25px */

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
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  /* identical to box height, or 14px */
  color: #393939;
`;

const Tag1 = styled.div`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 10px;
  gap: 10px;

  position: absolute;
  width: 71px;
  height: 28px;
  left: 26px;
  top: 274px;

  background: #ffffff;
  border: 1.5px solid #74b6fe;
  border-radius: 18px;

  // 가운데 정렬
  justify-content: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 148%;

  color: #74b6ff;
`;
const Tag2 = styled(Tag1)`
  left: 102px;
`;
const Tag3 = styled(Tag1)`
  left: 177px;
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
  /* or 12px */

  /* 선물_그레이스케일3 */

  color: #929090;
`;

const Result = ({ params }: any) => {
  // url에 제목 넣으면 seo에 좋기 떄문
  const [type] = params || [];
  return (
    <Wrapper>
      <SEO title={type} />
      <Background src="/img/bg_result.svg" alt="result_card" />
      <Card>
        <CardTitle>
          프로
          <br />
          지갑지킴이
        </CardTitle>
        <QR src="/img/Vector.svg" alt="result_card" />
        <Image1 />
        <TagTitle>태그</TagTitle>
        <Tag1>#가격비교</Tag1>
        <Tag2>#계산적</Tag2>
        <Tag3>#신중함</Tag3>
        <CardText>
          전시된 핸드폰으로 본인의 유형 카드를
          <br /> 인식하면 AR로 캐릭터를 만나볼 수 있어요!
        </CardText>
      </Card>
    </Wrapper>
  );
};

export default Result;
