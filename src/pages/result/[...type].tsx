import styled from '@emotion/styled';
import SEO from '../../components/SEO';

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

// margin으로 바꿔야 하는데 어떻게 위치 지정할지 생각해보기
const Tag1 = styled.div`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 10px;
  gap: 10px;

  position: absolute;
  /* width: 71px; */
  height: 28px;
  left: 26px;
  top: 274px;
  padding: 5px 10px;

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
const Title1 = styled.div`
  position: absolute;
  width: 32px;
  height: 18px;
  left: 42px;
  top: 485px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;

  color: #929090;
`;

const Title2 = styled.div`
  position: absolute;
  width: 156px;
  height: 22px;
  left: 42px;
  top: 513px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 100%;
  /* identical to box height, or 22px */

  color: #000000;
`;

const TextContainer1 = styled.div`
  position: absolute;
  width: 291px;
  height: 40px;
  left: 42px;
  top: 569px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  // 줄 간격 물어보기
  line-height: 150%;
  /* or 15px */

  color: #514e4e;
`;

const Star = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 272px;
  bottom: 18px;
  //원래 22px
`;

const TextContainer2 = styled(TextContainer1)`
  top: 631px;
`;
const TextContainer3 = styled(TextContainer1)`
  top: 718px;
`;
const TextContainer4 = styled(TextContainer1)`
  top: 807px;
`;

const Title3 = styled(Title1)`
  width: 114px;
  height: 18px;
  top: 932px;
`;

const Title4 = styled(Title2)`
  width: 237px;
  height: 22px;
  top: 960px;
`;
const Title5 = styled(Title1)`
  width: 88px;
  height: 18px;
  top: 1369px;
`;
const Title6 = styled(Title2)`
  width: 221px;
  height: 22px;
  top: 1397px;
`;

const PresentContainer = styled.div`
  position: absolute;
  width: 291px;
  height: 258px;
  left: 42px;
  top: 1026px;

  background: #f1f8ff;
  border-radius: 10px;
`;
const PickContainer = styled.div`
  position: absolute;
  width: 76px;
  height: 48px;
  left: 285px;
  top: 992px;
  z-index: 1;

  background: #74b6ff;
  border-radius: 0px 20px 20px 18px;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const PickText = styled.div`
  position: absolute;
  width: 32px;
  height: 25px;
  left: 307px;
  top: 1003px;
  z-index: 1;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  /* or 12px */

  text-align: center;

  color: #ffffff;
`;

const Caution = styled.div`
  position: absolute;
  width: 182px;
  height: 10px;
  left: 96px;
  top: 1299px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 100%;
  /* identical to box height, or 10px */

  color: #bbb6b6;
`;

const SmallCard = styled.div`
  position: absolute;
  width: 136px;
  height: 204px;
  left: 42px;
  top: 1453px;

  background: #ffffff;
  box-shadow: 0px 10px 35px rgba(120, 120, 120, 0.25);
  border-radius: 10px;
`;
const SmallCard2 = styled(SmallCard)`
  left: 197px;
`;

const SmallCardTitle = styled.p`
  position: absolute;
  left: 20px;
  top: 10px;
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
  /* top: 48px; */
  top: 40px;

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
  background: #74b6ff;
  border: none;
  border-radius: 0px 0px 10px 10px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
`;

const ShareContainer = styled.div`
  position: absolute;
  width: 375px;
  height: 377px;
  top: 1709px;
  background: #f1f8ff;
`;

const ShareTitle = styled.div`
  position: absolute;
  // 87로하면 줄바꿈됨
  width: 88px;
  height: 16px;
  left: 144px;
  top: 45px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  text-align: center;

  color: #000000;
`;

const ShareButton = styled.button`
  position: absolute;
  width: 44px;
  height: 44px;
  left: 165px;
  top: 79px;
  border-radius: 50%;
  border: none;
  background: #74b6ff;
`;
const ShareImg = styled.img`
  position: absolute;
  width: 22px;
  height: 19.5px;
  left: 12.25px;
  top: 12.25px;

  /* z-index: 1; */

  /* background: url('/img/share_button.svg'); */
`;

const BasicButton = styled.button`
  box-sizing: border-box;

  position: absolute;
  width: 291px;
  height: 62px;
  top: 165px;
  left: 42px;
  background: #ffffff;
  opacity: 0.8;
  border: 2px solid #74b6ff;
  border-radius: 15px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  text-align: center;

  color: #74b6ff;
`;

const BasicButton2 = styled(BasicButton)`
  background: #74b6ff;
  color: #ffffff;
  top: 239px;
`;

const Result = ({ params }: any) => {
  // url에 제목 넣으면 seo에 좋기 떄문
  const [type] = params || [];
  return (
    <Wrapper>
      <SEO type={type} />
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
      <Title1>과연</Title1>
      <Title2>나의 선물 유형은?</Title2>
      <TextContainer1>
        <Star src="/img/ic_dot_skyblue.svg" alt="result_card" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 그렇다고 선물에 짠 사람은 아니에요.
        보이는 이미지를 위해 선물에는 돈을 아끼지 않아요.
      </TextContainer1>
      <TextContainer2>
        <Star src="/img/ic_dot_skyblue.svg" alt="result_card" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 선물을 살 때도 나의 절약 정신은 없어지지
        않아요. 쿠폰 혜택과 할인 기회를 놓치면 손해가 아닐까요?
      </TextContainer2>
      <TextContainer3>
        <Star src="/img/ic_dot_skyblue.svg" alt="result_card" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 물건을 살 때는 이것저것 요모조모 다 따져
        보면서 사요. 철저한 가격 비교가 더 좋은 선택을 만드니까요.
      </TextContainer3>
      <TextContainer4>
        <Star src="/img/ic_dot_skyblue.svg" alt="result_card" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 같이 쇼핑을 따라와 준 친구가 즉흥적으로
        소비할 땐 참을 수 없어요. 친구들의 지갑 지킴이가 바로 나예요.
      </TextContainer4>
      <Title3>프로 지갑지킴이</Title3>
      <Title4>어떤 선물을 주고 받을까요? </Title4>
      <PickContainer />
      <PickText>
        브랜드
        <br />
        pick!
      </PickText>
      <PresentContainer />
      <Caution>*자체 설문조사를 통해 자료를 수집하였습니다.</Caution>
      <Title5>선물 메이트!</Title5>
      <Title6>나와의 환상/파국 궁합은? </Title6>
      <SmallCard>
        <SmallCardTitle>환상의 캐미</SmallCardTitle>
        <SmallCardText>
          선물
          <br /> 나르시스트
        </SmallCardText>
        <Image2 />
        <DetailButton>자세히 보기</DetailButton>
      </SmallCard>
      <SmallCard2>
        <SmallCardTitle>파국의 캐미</SmallCardTitle>
        <SmallCardText>
          낭만 쫓는
          <br /> 소비요정
        </SmallCardText>
        <Image3 />
        <DetailButton>자세히 보기</DetailButton>
      </SmallCard2>

      <ShareContainer>
        <ShareTitle>결과 공유하기</ShareTitle>
        <ShareButton>
          <ShareImg src="/img/share_button.svg" alt="share" />
        </ShareButton>
        <BasicButton>다른 유형 보기</BasicButton>
        <BasicButton2>테스트 다시하기</BasicButton2>
      </ShareContainer>
    </Wrapper>
  );
};

export default Result;
