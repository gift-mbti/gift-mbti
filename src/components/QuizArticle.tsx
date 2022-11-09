import styled from '@emotion/styled';

const QuizAnswerBtn1 = styled.button`
  font-family: 'Pretendard Variable', sans-serif;
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

  @media (min-width: 1400px) {
    &:hover {
      border: 2px solid #fd6463;
      background-color: #ffe9e9;
      color: #fd6463;
    }
  }
  &:active {
    border: 2px solid #fd6463;
    background-color: #fd6463;
    color: white;
  }
`;

const QuizArticle = ({ data, onNextStep }: any) => {
  return <QuizAnswerBtn1 onClick={onNextStep}>{data.content}</QuizAnswerBtn1>;
};

export default QuizArticle;
