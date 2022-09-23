import styled from '@emotion/styled';
import SEO from '../../components/SEO';

const Container = styled.div`
  /* position: absolute; */
  width: 375px;
  height: 2051px;
  left: 410px;
  top: 80px;
  background-color: red;
  /* background: #ffffff; */
`;

const CardContainer = styled.div`
  /* position: absolute; */
  width: 375px;
  height: 408.87px;
  left: 410px;
  top: 80px;
  z-index: auto;
  background-image: url('/img/bg_result.svg');
`;

const Card = styled.div`
  position: absolute;
  width: 279px;
  height: 389px;
  left: 457px;
  top: 176px;

  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(106, 106, 106, 0.25);
  border-radius: 20px;
`;
const Image = styled.div`
  position: absolute;
  width: 200px;
  height: 136px;
  left: 506px;
  top: 225px;
  background: url('/img/image 1.svg');
`;
const CardTitle = styled.p`
  position: absolute;
  width: 111px;
  height: 55px;
  left: 484px;
  top: 156px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 100%;
  /* or 25px */
  letter-spacing: 0.02em;
  color: #000000;
`;
const Vetor = styled.div`
  position: absolute;
  left: 57.45%;
  right: 40.45%;
  top: 7.46%;
  bottom: 91.37%;

  background: url('/img/Vector.svg');
`;

const Result = ({ params }: any) => {
  // url에 제목 넣으면 seo에 좋기 떄문
  const [type] = params || [];
  return (
    <Container>
      <SEO title={type} />
      <CardContainer />
      <Card>
        <CardTitle>프로 지갑지킴이</CardTitle>
        <Vetor />
        <Image />
      </Card>
    </Container>
  );
};

export default Result;
