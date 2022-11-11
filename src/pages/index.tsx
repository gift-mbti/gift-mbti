import styled from '@emotion/styled';
import Image from 'next/image';
import Router from 'next/router';
import SEO from '../components/SEO';

const Wrapper = styled.div``;
const Title = styled.p`
  width: 195px;
  height: 70px;
  font-weight: 800;
  margin: 0 auto;
  margin-top: 42px;
  text-align: center;
  font-size: 29px;
  color: #000000;
`;

const SubTitle = styled.p`
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

const StartButton = styled.button`
  font-family: 'Pretendard Variable', sans-serif;
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
  const onButtonClick = () => {
    Router.push('/quiz');
  };

  return (
    <Wrapper>
      <SEO title="나의 선물 유형을 찾아서" />
      <Title>나의 선물 유형을 찾아서</Title>
      <SubTitle>내가 어떤 선물러인지 알아볼까요?</SubTitle>
      <CardContainer>
        <Image
          src="/img/img_main.jpg"
          alt="homeCard"
          width={375}
          height={440}
          priority
        />
      </CardContainer>
      <StartButton onClick={onButtonClick}>테스트 시작하기</StartButton>
    </Wrapper>
  );
};

export default Home;
