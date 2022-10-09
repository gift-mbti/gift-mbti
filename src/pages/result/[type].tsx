import styled from '@emotion/styled';
import Cards from '../../components/result/Cards';
import Description from '../../components/result/Description';
import Pick from '../../components/result/Pick';
import ResultCard from '../../components/result/ResultCard';
import Share from '../../components/result/Share';
import SEO from '../../components/SEO';

const Wrapper = styled.div`
  position: relative;
  font-family: 'Pretendard';
`;

const Background = styled.img``;

const Title1 = styled.div`
  margin-top: 187px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;

  color: #929090;
`;

const Title2 = styled.div`
  margin-top: 10px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 100%;

  color: #000000;
`;
const Container = styled.div`
  margin: auto;
  width: 292px;
  padding: 0;
  white-space: pre-wrap;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  // 줄 간격 물어보기
  line-height: 150%;
  /* or 15px */

  color: #514e4e;
`;

const Title3 = styled.div`
  margin-top: 60px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;

  color: #929090;
`;

const Title4 = styled(Title3)`
  margin-top: 10px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 100%;

  color: #000000;
`;

const Result = ({ data }: any) => {
  return (
    <Wrapper>
      <SEO type={data.type} />
      <Background src={data.background} alt="result_card" />
      <ResultCard name={data.name} tags={data.tags} tagColor={data.tagColor} />

      <Container>
        <Title1>과연</Title1>
        <Title2>나의 선물 유형은?</Title2>
        <Description desc={data.desc} star={data.star} />

        <Title3>{data.midName}</Title3>
        <Title4>어떤 선물을 주고 받을까요? </Title4>
        <Pick
          pickColor={data.pickColor}
          bgColor={data.bgColor}
          gift={data.gift}
          giftTag={data.giftTag}
          pickTextColor={data.pickTextColor}
        />

        <Title3>선물 메이트!</Title3>
        <Title4>나와의 환상/파국 궁합은? </Title4>
        <Cards
          best={data.best}
          worst={data.worst}
          buttonColor={data.buttonColor}
        />
      </Container>
      <Share bgColor={data.bgColor} buttonColor={data.buttonColor} />
    </Wrapper>
  );
};

export default Result;

export async function getStaticPaths() {
  const { data } = await import('../../data/result.json');

  const paths = data.map((list) => ({
    params: { type: list.type },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { data } = await import('../../data/result.json');

  if (!params) {
    return {
      notFound: true,
    };
  }

  if (!data) {
    return { notFound: true };
  }

  // {props: data} 빌드 타임에 받아서 result 컴포넌트로 보냄
  return {
    props: {
      data: data[params.type - 1],
    },
  };
}
