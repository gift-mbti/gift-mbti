import styled from '@emotion/styled';

const DescContainer = styled.section`
  margin-top: 50px;
`;

const TextContainer = styled.div`
  margin-top: 22px;
`;

const Star = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
`;

const Title1 = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;

  color: #929090;
`;

const Title2 = styled.div`
  margin-top: 10px;
  font-weight: 800;
  font-size: 22px;
  line-height: 100%;
  color: #000000;
`;

const Description = ({ desc, star }: any) => {
  return (
    <DescContainer>
      <Title1>과연</Title1>
      <Title2>나의 선물 유형은?</Title2>
      {desc.map((text: string, index: number) => (
        <TextContainer key={index}>
          <Star src={star} alt="star" />
          {text}
        </TextContainer>
      ))}
    </DescContainer>
  );
};

export default Description;
