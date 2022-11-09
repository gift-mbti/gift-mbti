import styled from '@emotion/styled';
import Image from 'next/image';

const QuizCardContainer = styled.div`
  position: relative;
  width: 375px;
  height: 444px;
`;
const QuizCard = styled.div`
  position: relative;
`;
const QuizCardContent = styled.p`
  position: absolute;
  width: 190px;
  text-align: center;
  font-size: 17px;
  line-height: 150%;
  font-weight: 800;
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
      <QuizCard>
        <Image
          src="/img/quizCard.svg"
          alt="quizCard"
          width={375}
          height={444}
        />
      </QuizCard>
      <QuizCardContent>{title}</QuizCardContent>
    </QuizCardContainer>
  );
};

export default QuizTitle;
