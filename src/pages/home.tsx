import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div``;
const Title = styled.p`
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 800;
  }
  width: 195px;
  height: 70px;
  margin: 0 auto;
  margin-top: 42px;
  text-align: center;
  font-family: 'Pretendard';
  //호진 TODO : 30px하면 다음줄로 넘어감
  font-size: 29px;
  color: #000000;
`;

const SubTitle = styled.p`
  //호진 TODO : font 굵기가 약간 이상한거 같음
  @font-face {
    font-family: Apple SD Gothic Neo;
    src: url('/fonts/AppleSDGothicNeoT.woff');
    font-weight: 600;
  }
  width: 214px;
  line-height: 16px;
  font-size: 16px;
  font-family: 'Apple SD Gothic Neo';
  color: #514e4e;
  margin: 0 auto;
  margin-top: 22px;
`;

const CardContainer = styled.div`
  width: 271px;
  height: 335px;
  box-shadow: 0px 10px 40px rgba(106, 106, 106, 0.25);
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 61.36px;
  padding: 14px 0px;
`;
const CardFront = styled.div`
  width: 239px;
  height: 307px;
  background-color: #f5f5f5;
  border-radius: 13px;
  margin: 0 auto;
`;

const CardImgContainer = styled.div`
  // 호진 TODO : absolute로 적용하게 되면 다른 모바일 사이즈에서 안맞음 => 고민해봐야함
  position: absolute;
  top: 326px;
  left: 566px;
`;
const CardQuestionImg = styled.img`
  width: 61px;
  height: 96px;
  text-align: center;
`;

const StartButton = styled.button`
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
  }
  display: block;
  background-color: #fd6463;
  width: 319px;
  height: 60px;
  border-radius: 36.5px;
  border: none;
  margin: 0 auto;
  margin-top: 21px;
  margin-bottom: 75px;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

const Home = () => {
  return (
    <Wrapper>
      <Title>나의 선물 유형을 찾아서</Title>
      <SubTitle>내가 어떤 선물러인지 알아볼까요?</SubTitle>
      <CardContainer>
        <CardImgContainer>
          <CardQuestionImg src="img/question.svg" alt="물음표" />
        </CardImgContainer>
        <CardFront />
      </CardContainer>
      {/* 호진 TODO : Button은 컴포넌트로 빼면 좋을듯 */}
      <StartButton>테스트 시작하기</StartButton>
    </Wrapper>
  );
};

export default Home;
