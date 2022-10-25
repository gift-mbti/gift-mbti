import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import SEO from '../components/SEO';

const Wrapper = styled.div``;
const Title = styled.p`
  width: 195px;
  height: 70px;
  font-weight: 800;
  margin: 0 auto;
  margin-top: 42px;
  text-align: center;
  //호진 TODO : 30px하면 다음줄로 넘어감
  font-size: 29px;
  color: #000000;
`;

const SubTitle = styled.p`
  //호진 TODO : font 굵기가 약간 이상한거 같음
  width: 214px;
  line-height: 16px;
  font-size: 16px;
  color: #514e4e;
  margin: 0 auto;
  margin-top: 22px;
`;

const CardContainer = styled.div`
  margin-top: 32px;
`;

// lighthouse 최적화 - Image elements do not have explicit width and height
const CardImg = styled.img`
  width: 375px;
  height: 440px;
`;

const StartButton = styled.button`
  font-family: 'Pretendard';
  display: block;
  background-color: #fd6463;
  width: 319px;
  height: 60px;
  border-radius: 15px;
  border: none;
  margin: 0 auto;
  margin-top: 21px;
  margin-bottom: 75px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: white;
  cursor: pointer;
`;

const Home = () => {
  return (
    <Wrapper>
      <SEO title="나의 선물 유형을 찾아서" />
      <Title>나의 선물 유형을 찾아서</Title>
      <SubTitle>내가 어떤 선물러인지 알아볼까요?</SubTitle>
      <CardContainer>
        <img
          src="/img/img_main.jpg"
          alt="homeCard"
          width="375px"
          height="440px"
        />
        {/* <Image
          src="/img/img_main2.png"
          alt="homeCard"
          width="375px"
          height="440px"
          priority
        /> */}
      </CardContainer>
      {/* 호진 TODO : Button은 컴포넌트로 빼면 좋을듯 */}
      <Link href="/quiz">
        <StartButton>테스트 시작하기</StartButton>
      </Link>
    </Wrapper>
  );
};

export default Home;
