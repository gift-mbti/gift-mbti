import styled from '@emotion/styled';
import React from 'react';

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
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  white-space: pre-wrap;
  color: black;
  // 모바일에서는 hover가 되지 않는다 따라서 특정 사이즈 미만의 화면에서는 hover가 적용되지 않게 바꾼다.
  @media (min-width: 450px) {
    &:hover {
      border: 2px solid #fd6463;
      background-color: #ffe9e9;
      color: #fd6463;
    }
  }

  &:active {
    background-color: #fd6463;
    color: white;
  }
`;

// 호진 TODO: 텍스트 가운데 정렬이 필요하다.
// P태그 눌렀을때는 색이 잘 변하는데 button 눌렀을때 안변함
// const QuizAnswer1 = styled.p`
//   width: 260px;
//   margin: 0 auto;
//   text-align: center;
//   font-weight: 600;
//   font-size: 14px;
//   color: black;
//   white-space: pre-wrap;
//   &:hover {
//     color: #fd6463;
//   }
//   &:active {
//     color: white;
//   }
// `;

const QuizArticle = ({ data, onNextStep }: any) => {
  return <QuizAnswerBtn1 onClick={onNextStep}>{data.content}</QuizAnswerBtn1>;
};

export default QuizArticle;
