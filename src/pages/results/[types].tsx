import styled from '@emotion/styled';
import Router from 'next/router';
import SEO from '../../components/SEO';
import { Background, Container, DataProps, Wrapper } from '../result/[type]';
import Card from '../../components/result/molecules/Card';
import Description from '../../components/result/organisms/Description';
import Pick from '../../components/result/molecules/Pick';
import Cards from '../../components/result/organisms/Cards';
import FixedButton from '../../components/result/atoms/FixedButton';

const Nav = styled.nav`
  height: 62px;
  padding: 12px 20px 12px 20px;
  background: rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(27px);
  display: flex;
  flex-direction: row;
  gap: 5px;
  overflow-x: scroll;
  overflow-y: hidden;
  cursor: pointer;
  ::-webkit-scrollbar {
    display: none;
  }
`;

interface NavButtonProps {
  type: string;
}

const ButtonContainer = styled.div`
  background-color: ${(props) => props.color};
`;

const NavButton = styled.div<NavButtonProps>`
  box-sizing: border-box;
  padding: 8px 16px;
  height: 38px;
  background: ${(props) => (props.type === '1' ? '#000000' : 'none')};
  border: none;
  border-radius: 20px;
  font-weight: ${(props) => (props.type === '1' ? 700 : 800)};
  font-size: 15px;
  line-height: 148%;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${(props) => (props.type === '1' ? '#FFFFFF' : '#000000')};
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const all = [
  '큰 그림 선물러',
  '브랜드 외길인생',
  '아기자기 선물보따리',
  '낭만 쫓는 소비요정',
  '아낌없는 해바라기',
  '반짝반짝 플렉서',
  '프로 지갑지킴이',
  '선물 나르시시스트',
];

const Results = ({ data }: DataProps) => {
  const backgroundImg = `/img/background/bg_result${data.type}.svg`;
  const starImg = `/img/Dot/dot${data.type}.jpg`;
  const cardImg = `/img/Avatar/image${data.type}.jpg`;

  const onButtonClick = (i: number) => {
    Router.push(`/results/${i}`);
  };

  return (
    <Wrapper>
      <SEO title={data.name} description={`${data.name}의 선물 유형`} />
      <FixedButton text="테스트 다시하기" />
      <ButtonContainer color={data.color}>
        <Nav color={data.color}>
          {all.map((a, i) => {
            return (
              <NavButton
                key={i}
                type={data.type === (i + 1).toString() ? '1' : '2'}
                onClick={() => {
                  onButtonClick(i + 1);
                }}
              >
                {a}
              </NavButton>
            );
          })}
        </Nav>
      </ButtonContainer>
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
          borderColor={data.borderColor}
          gift={data.gift}
          giftTag={data.giftTag}
        />
        <Cards best={data.best} worst={data.worst} color={data.color} />
      </Container>
    </Wrapper>
  );
};

export default Results;

export async function getStaticPaths() {
  const { data } = await import('../../data/result.json');

  const paths = data.map((list) => ({
    params: { types: list.type },
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
      data: data[params.types - 1],
    },
  };
}
