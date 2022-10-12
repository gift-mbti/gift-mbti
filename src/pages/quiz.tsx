import styled from '@emotion/styled';
import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import QuizArticle from '../components/QuizArticle';
import items from '../data/quiz';
import ModalStyle from '../styles/modalStyle';

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

const quiz = () => {
  const [steps, setStep] = useState<number>(0);
  const [questions, setQuestion] = useState<number>(8);
  const [finish, setFinish] = useState<boolean>(false);
  const currentData = useMemo(() => items[steps], [steps]);
  const [open, isOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleClickNextStep = (ans: any) => {
    const [key, value] = Object.entries(ans.type)[0];

    if (steps !== 8) {
      setStep((step) => step + 1);
      setQuestion((question) => question - 1);
    } else {
      setFinish(true);
      router.push('/loading');
    }
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
        <QuestionCountContainer>남은 문항 {questions}</QuestionCountContainer>
      </QuizHeader>
      <QuizCardContainer>
        <QuizCard src="/img/quizCard.svg" alt="quizCard" />
        <QuizCardContent>{currentData.title}</QuizCardContent>
      </QuizCardContainer>
      {/* 2번째꺼를 클릭해도 첫번째만 나오는 이유는? */}
      {/* 이 부분인데 이렇게 함으로써 2개의 버튼이 생성되고 클릭을 했을때 해당 클릭한 부분의 mbti로직을 알고 싶은거야 근데 두번째를 눌러도 첫번째 값만 떠! 
      이유가 저기 handleClickNextStep 함수의 index를 항상 0번째로 해서 그런데 그 사람 로직도 항상 0번째를 가리키더라구 왜 그러는 걸까?? */}
      {currentData.options.map((ans, index: number) => {
        return (
          <QuizArticle
            key={index}
            data={ans}
            onNextStep={() => {
              handleClickNextStep(ans);
            }}
          />
        );
      })}
    </Wrapper>
  );
};

export default quiz;
