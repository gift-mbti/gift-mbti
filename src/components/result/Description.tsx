import React from 'react';
import styled from '@emotion/styled';

const DescContainer = styled.div`
  margin-top: 34px;
`;

const TextContainer = styled.div`
  margin-top: 22px;
`;

const Star = styled.img`
  position: absolute;
`;

const Description = ({ desc, star }: any) => {
  return (
    <DescContainer>
      {desc.map((d: string) => (
        <TextContainer>
          <Star src={star} alt="star" />
          {d}
        </TextContainer>
      ))}
    </DescContainer>
  );
};

export default Description;
