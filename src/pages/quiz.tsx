import styled from '@emotion/styled';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import QuizArticle from '../components/QuizArticle';
import calculateResult from '../utils/calculateResult';
import QuizTitle from '../components/QuizTitle';
import SEO from '../components/SEO';
import GotoHomeModal from '../components/result/molecules/ GotoHomeModal';

const Wrapper = styled.div`
  font-family: 'Pretendard Variable', sans-serif;
  @media (max-width: 700px) {
    margin-bottom: 70px;
  }
`;
const QuizHeader = styled.div`
  display: flex;
  margin-top: 27px;
  justify-content: space-between;
`;
const QuizLogoImg = styled.div`
  margin-left: 40px;
  cursor: pointer;
`;
const QuestionCountContainer = styled.p`
  width: 83px;
  height: 37px;
  border: 2px solid #dedede;
  border-radius: 8px;
  text-align: center;
  margin-top: 0px;
  margin-right: 40px;
  font-weight: 800;
  font-size: 14px;
  line-height: 35px;
  letter-spacing: 0.02em;
  color: #575757;
`;

interface TypeState {
  [key: string]: number;
}
interface AnswerProps {
  content: string;
  type: {
    [key: string]: number;
  };
}

const quiz = ({ data }: any) => {
  const [steps, setStep] = useState<number>(0);
  const [questions, setQuestion] = useState<number>(8);
  const [finish, setFinish] = useState<boolean>(false);
  const currentData = useMemo(() => data[steps], [steps]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [type, setType] = useState<TypeState>({
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });

  const router = useRouter();

  useEffect(() => {
    if (!finish) return;

    const res = calculateResult(type);
    router.push({
      pathname: '/loading',
      query: {
        res,
      },
    });
  }, [finish]);

  const handleClickNextStep = (ans: AnswerProps) => {
    const [key, value] = Object.entries(ans.type)[0];

    setType({
      ...type,
      [key]: type[key] + value,
    });

    if (steps !== 8) {
      setStep((step) => step + 1);
      setQuestion((question) => question - 1);
      return;
    }

    setFinish(true);
  };

  const handleClickModal = () => {
    setIsOpen(true);
  };

  return (
    <Wrapper>
      <SEO title="나의 선물 유형을 찾아서" />
      <QuizHeader>
        <QuizLogoImg onClick={handleClickModal}>
          <Image
            src="/img/newQuizLogo2.png"
            alt="quizLogo"
            width={60}
            height={32}
          />
        </QuizLogoImg>
        <GotoHomeModal
          isOpen={isOpen}
          onhandleOpen={() => {
            setIsOpen(false);
          }}
        />
        <QuestionCountContainer>
          {questions === 0 ? '마지막!' : `남은 문항 ${questions}`}
        </QuestionCountContainer>
      </QuizHeader>
      <QuizTitle title={currentData.title} />
      {currentData.options.map((ans: any, i: number) => {
        return (
          <QuizArticle
            key={i}
            data={ans}
            onNextStep={() => handleClickNextStep(ans)}
          />
        );
      })}
    </Wrapper>
  );
};

export default quiz;

export async function getServerSideProps() {
  const { data } = await import('../data/quiz.json');
  return {
    props: {
      data,
    },
  };
}
