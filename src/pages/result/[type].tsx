import { useState } from 'react';
import styled from '@emotion/styled';
import Description from '../../components/result/organisms/Description';
import Pick from '../../components/result/molecules/Pick';
import Card from '../../components/result/molecules/Card';
import SEO from '../../components/SEO';
import Cards from '../../components/result/organisms/Cards';

import Share from '../../components/result/organisms/Share';
import GotoHomeModal from '../../components/result/molecules/ GotoHomeModal';

interface IBackground {
  pic: string;
}

export const Wrapper = styled.main`
  position: relative;
  width: 375px;
  font-style: normal;
  white-space: pre-wrap;
`;

export const Background = styled.div<IBackground>`
  width: 375px;
  height: 408.87px;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.pic});
`;

export const Container = styled.div`
  margin: auto;
  width: 292px;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;

  color: #514e4e;
`;

export interface ResultProps {
  type: string;
  name: string;
  color: string;
  tags: string[];
  desc: string[];
  midName: string;
  bgColor: string;
  gift: string[];
  giftTag: string[];
  best: string[];
  worst: string[];
}

export interface DataProps {
  data: ResultProps;
}

const Result = ({ data }: DataProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const backgroundImg = `/img/background/bg_result${data.type}.svg`;
  const starImg = `/img/dot/ic_dot_skyblue1.png`;
  const cardImg = `/img/CardImg/cardimg${data.type}.svg`;

  return (
    <Wrapper>
      <SEO title={data.name} description={`${data.name}의 선물 유형`} />
      <GotoHomeModal
        isOpen={isOpen}
        onhandleOpen={() => {
          setIsOpen(false);
        }}
      />
      <Background pic={backgroundImg}>
        <Card
          name={data.name}
          cardImg={cardImg}
          tags={data.tags}
          color={data.color}
        />
      </Background>
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
      <Share bgColor={data.bgColor} color={data.color} setIsOpen={setIsOpen} />
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
