import styled from '@emotion/styled';
import React from 'react';

const QuizCardContainer = styled.div`
  position: relative;
  width: 375px;
  height: 444px;
`;
const QuizCard = styled.img`
  position: relative;
`;
const QuizCardContent = styled.p`
  position: absolute;
  width: 190px;
  height: 106px;
  text-align: center;
  font-size: 17px;
  line-height: 150%;
  font-weight: 800;
  // 호진 TODO : 텍스트 가운데 정렬 오류가 있음!
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: pre-wrap;
`;

interface TypeState {
  title: string;
}

const QuizTitle = ({ title }: TypeState) => {
  return (
    <QuizCardContainer>
      <QuizCard src="/img/quizCard.svg" alt="quizCard" />
      <QuizCardContent>{title}</QuizCardContent>
    </QuizCardContainer>
  );
};

export default QuizTitle;
