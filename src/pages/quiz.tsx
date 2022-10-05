import styled from '@emotion/styled';
import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import QuizArticle from '../components/QuizArticle';
import items from '../data/quiz';

const Wrapper = styled.div``;
const QuizHeader = styled.div`
  display: flex;
  margin-top: 27px;
  justify-content: space-between;
`;
const QuizLogoImg = styled.img`
  /* 호진 TODO : logo 사이즈 다시 보기 */
  width: 56.55px;
  height: 50px;
  margin-left: 22px;
`;
const QuestionCountContainer = styled.p`
  width: 83px;
  height: 37px;
  border: 2px solid #dedede;
  border-radius: 8px;
  text-align: center;
  padding-top: 7px;
  /* 호진TODO : P태그에 기본적으로 margin top 요소가 있는 이유? */
  margin-top: 0px;
  margin-right: 40px;
  font-weight: 800;
  font-size: 14px;
  line-height: 148%;
  letter-spacing: 0.02em;
  color: #575757;
`;

const quiz = () => {
  const [steps, setStep] = useState<number>(0);
  const [questions, setQuestion] = useState<number>(8);
  const [finish, setFinish] = useState<boolean>(false);
  const currentData = useMemo(() => items[steps], [steps]);

  const router = useRouter();

  const handleClickNextStep = () => {
    if (steps !== 8) {
      setStep((step) => step + 1);
      setQuestion((question) => question - 1);
    } else {
      setFinish(true);
      router.push('/loading');
    }
  };

  return (
    <Wrapper>
      <QuizHeader>
        <Link href="/">
          <QuizLogoImg src="/img/quizLogo.svg" alt="quizLogo" />
        </Link>
        <QuestionCountContainer>남은 문항 {questions}</QuestionCountContainer>
      </QuizHeader>
      <QuizArticle items={currentData.qna} onNextStep={handleClickNextStep} />
    </Wrapper>
  );
};

export default quiz;
