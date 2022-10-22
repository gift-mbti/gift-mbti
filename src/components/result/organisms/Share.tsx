import styled from '@emotion/styled';
import Router from 'next/router';
import { useState } from 'react';
import Button from '../atoms/Button';
import ShareButton from '../atoms/ShareButton';
import CopyAlert from '../molecules/CopyAlert';

const ShareContainer = styled.section`
  height: 377px;
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 15px;
  line-height: 150%;

  color: #514e4e;
  background: ${(props) => props.color};
`;

const ShareTitle = styled.div`
  margin: auto auto 17px;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: black;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 12px;
`;

interface ShareProps {
  bgColor: string;
  color: string;
  setIsOpen: (isOpen: boolean) => void;
}

const Share = ({ bgColor, color, setIsOpen }: ShareProps) => {
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  const gotoHome = () => {
    setIsOpen(true);
  };
  const gotoResults = () => {
    Router.push('/results/1');
  };

  const onShareButtonClick = () => {
    if (typeof window !== 'undefined') {
      // Client-side-only code
      navigator.clipboard.writeText(window.location.href);
      setIsAlertOpen(true);
      setTimeout(() => {
        setIsAlertOpen(false);
      }, 1500);
    }
  };

  return (
    <ShareContainer color={bgColor}>
      <ShareTitle>결과 공유하기</ShareTitle>
      <ShareButton onClick={onShareButtonClick} color={color} />
      <ButtonContainer>
        <Button
          onButtonClick={gotoResults}
          color={color}
          text="다른 유형 보기"
          type="defult"
        />
        <Button
          onButtonClick={gotoHome}
          color={color}
          text="테스트 다시하기"
          type="reverse"
        />
      </ButtonContainer>
      {isAlertOpen && <CopyAlert />}
    </ShareContainer>
  );
};

export default Share;
