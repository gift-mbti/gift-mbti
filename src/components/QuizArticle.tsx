import styled from '@emotion/styled';
import React from 'react';

const QuizCardContainer = styled.div`
  position: relative;
  width: 375px;
  height: 444px;
`;
const QuizCard = styled.img``;
const QuizCardContent = styled.p`
  position: absolute;
  width: 165px;
  height: 106px;
  text-align: center;
  font-size: 19px;
  font-weight: 800;
  top: 160px;
  left: 100px;
`;

// 호진 TODO : Emotion 상속받는법에 대해서 생각해보기
const QuizAnswerBtn1 = styled.button`
  display: block;
  position: relative;
  width: 293px;
  height: 73px;
  background-color: #f5f5f5;
  border: 2px solid #dddddd;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 15px;

  cursor: pointer;
  &:hover {
    border: 2px solid #fd6463;
    background-color: #ffe9e9;
  }
  &:active {
    background-color: #fd6463;
    color: white;
  }
`;

const QuizAnswerBtn2 = styled.button`
  display: block;
  width: 293px;
  height: 73px;
  background-color: #f5f5f5;
  border: 2px solid #dddddd;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 65px;
  cursor: pointer;
  &:hover {
    border: 2px solid #fd6463;
    background-color: #ffe9e9;
  }
  &:active {
    background-color: #fd6463;
    color: white;
  }
`;

// 호진 TODO : 텍스트 가운데 정렬이 필요하다.
const QuizAnswer1 = styled.p`
  width: 144px;
  height: 32px;
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  color: black;
`;
const QuizAnswer2 = styled.p`
  width: 144px;
  height: 32px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 14px;
  color: black;
`;

const QuizArticle = ({ items, onNextStep }: any) => {
  return (
    <>
      <QuizCardContainer>
        <QuizCard src="/img/quizCard.svg" alt="quizCard" />
        <QuizCardContent>{items.title}</QuizCardContent>
      </QuizCardContainer>
      <QuizAnswerBtn1 onClick={onNextStep}>
        <QuizAnswer1>{items.ans1}</QuizAnswer1>
      </QuizAnswerBtn1>
      <QuizAnswerBtn2 onClick={onNextStep}>
        <QuizAnswer2>{items.ans2}</QuizAnswer2>
      </QuizAnswerBtn2>
    </>
  );
};

export default QuizArticle;
