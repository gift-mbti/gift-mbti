import styled from '@emotion/styled';
import Description from '../../components/result/organisms/Description';
import Pick from '../../components/result/molecules/Pick';
import Card from '../../components/result/molecules/Card';
import Share from '../../components/result/organisms/Share';
import SEO from '../../components/SEO';
import Cards from '../../components/result/organisms/Cards';

export const Wrapper = styled.main`
  position: relative;
  width: 375px;

  font-family: 'Pretendard';
  font-style: normal;
  white-space: pre-wrap;
`;

export const Background = styled.img``;

export const Container = styled.div`
  margin: auto;
  width: 292px;

  font-weight: 500;
  font-size: 15px;
  line-height: 150%;

  color: #514e4e;
  margin-bottom: 105px;
`;

const Result = ({ data }: any) => {
  const backgroundImg = `/img/background/bg_result${data.type}.svg`;
  const starImg = `/img/dot/ic_dot${data.type}.svg`;
  const cardImg = `/img/CardImg/cardimg${data.type}.svg`;

  return (
    <Wrapper>
      <SEO type={data.name} />
      <Background src={backgroundImg} alt="result_card" />
      <Card
        name={data.name}
        cardImg={cardImg}
        tags={data.tags}
        color={data.color}
      />

      <Container>
        <Description desc={data.desc} star={starImg} />
        <Pick
          midName={data.midName}
          color={data.color}
          bgColor={data.bgColor}
          gift={data.gift}
          giftTag={data.giftTag}
        />
        <Cards best={data.best} worst={data.worst} color={data.color} />
      </Container>
      <Share bgColor={data.bgColor} color={data.color} />
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
