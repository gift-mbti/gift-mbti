import { useState } from 'react';
import styled from '@emotion/styled';
import Description from '../../components/result/organisms/Description';
import Pick from '../../components/result/molecules/Pick';
import Card from '../../components/result/molecules/Card';
import SEO from '../../components/SEO';
import Cards from '../../components/result/organisms/Cards';
import Share from '../../components/result/organisms/Share';
import GotoHomeModal from '../../components/result/molecules/ GotoHomeModal';

export const Wrapper = styled.main`
  position: relative;
  width: 375px;
  font-style: normal;
  white-space: pre-wrap;
`;

export const Background = styled.div`
  width: 375px;
  height: 408.87px;
  background-color: ${(props) => props.color};
  z-index: -1;
`;

export const Round = styled.div`
  background-color: white;
  position: absolute;
  z-index: 1;
  top: 217px;
  left: -65px;
  width: 505px;
  height: 232px; /* as the half of the width */
  border-top-left-radius: 252px; /* 100px of height + 10px of border */
  border-top-right-radius: 252px; /* 100px of height + 10px of border */
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
  borderColor: string;
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
  const starImg = `/img/Dot/dot${data.type}.jpg`;
  const cardImg = `/img/Avatar/image${data.type}.jpg`;

  return (
    <Wrapper>
      <SEO title={data.name} description={`${data.name}의 선물 유형`} />
      <GotoHomeModal
        isOpen={isOpen}
        onhandleOpen={() => {
          setIsOpen(false);
        }}
      />
      <Background color={data.color}>
        <Card
          name={data.name}
          cardImg={cardImg}
          tags={data.tags}
          color={data.color}
        />
      </Background>
      <Round />
      <Container>
        <Description desc={data.desc} star={starImg} />
        <Pick
          midName={data.midName}
          color={data.color}
          bgColor={data.bgColor}
          borderColor={data.borderColor}
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

export async function getServerSideProps({ params }: any) {
  const { data } = await import('../../data/result.json');

  return {
    props: {
      data: data[params.type - 1],
    },
  };
}
