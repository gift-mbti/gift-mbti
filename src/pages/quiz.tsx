import styled from '@emotion/styled';
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { GetStaticProps } from 'next';
import QuizArticle from '../components/QuizArticle';
import items from '../data/quiz';
// import qna from '../data/quiz.json';
import ModalStyle from '../styles/modalStyle';
import calculateResult from '../utils/calculateResult';
import QuizTitle from '../components/QuizTitle';
import SEO from '../components/SEO';

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

const ModalWrapper = styled.div``;

const ModalTitle = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  margin-top: 40px;
`;

const ModalBackBtn = styled.button`
  display: block;
  width: 282px;
  height: 42px;
  margin: 0 auto;
  margin-top: 32px;
  background-color: #fd6463;
  border-radius: 10px;
  font-weight: 800;
  font-size: 13px;
  color: white;
  border: none;
  cursor: pointer;
`;
const ModalCancelBtn = styled.button`
  display: block;
  width: 282px;
  height: 42px;
  margin: 0 auto;
  margin-top: 9px;
  background-color: #ebebeb;
  opacity: 0.8;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
`;

// const QuizCardContainer = styled.div`
//   position: relative;
//   width: 375px;
//   height: 444px;
// `;
// const QuizCard = styled.img`
//   position: relative;
// `;
// const QuizCardContent = styled.p`
//   position: absolute;
//   width: 190px;
//   height: 106px;
//   text-align: center;
//   font-size: 17px;
//   line-height: 150%;
//   font-weight: 800;
//   // 호진 TODO : 텍스트 가운데 정렬 오류가 있음!
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   white-space: pre-wrap;
// `;

interface TypeState {
  [key: string]: number;
}
// ans 타입 다시 설정하기
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
  const [open, isOpen] = useState<boolean>(false);
  const [type, setType] = useState<TypeState>({
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });

  const router = useRouter();

  // finish의 상태가 바뀌면 계산을 진행한후에 결과값을 출력한다.
  useEffect(() => {
    // 호진TODO: useEffect를 사용해서 finish의 상태가 바뀔때 사용하는데 왜 finish의 상태가 바뀌지 않아도 작동하는지 모르겠음
    if (!finish) return;

    const res = calculateResult(type);
    router.push({
      pathname: '/loading',
      query: {
        res,
      },
    });
  }, [finish]);

  // 호진 TODO: ans 타입이 any일때는 value값에 에러가 발생하는데 타입을 지정해주면 에러가 발생하지 않음!
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
    isOpen(true);
  };
  const handleCancelBtn = () => {
    isOpen(false);
  };
  const handleMoveToHomeBtn = () => {
    router.push('/');
  };

  return (
    <Wrapper>
      <SEO title="나의 선물 유형을 찾아서" />
      <QuizHeader>
        <QuizLogoImg
          src="/img/quizLogo.svg"
          alt="quizLogo"
          onClick={handleClickModal}
        />
        <Modal isOpen={open} style={ModalStyle} ariaHideApp={false}>
          <ModalWrapper>
            <ModalTitle>처음으로 돌아가시겠어요?</ModalTitle>
            <ModalBackBtn onClick={handleMoveToHomeBtn}>돌아가기</ModalBackBtn>
            <ModalCancelBtn onClick={handleCancelBtn}>취소</ModalCancelBtn>
          </ModalWrapper>
        </Modal>
        <QuestionCountContainer>
          {questions === 0 ? '결과확인!' : `남은 문항 ${questions}`}
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
