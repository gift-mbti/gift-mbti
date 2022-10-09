import styled from '@emotion/styled';

const ShareContainer = styled.div`
  margin-top: 290px;
  width: 375px;
  height: 377px;
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  // 줄 간격 물어보기
  line-height: 150%;

  color: #514e4e;
  background: ${(props) => props.color};
`;

const ShareTitle = styled.div`
  margin: 45px 143px 18px 143px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;

  text-align: center;

  color: #000000;
`;

const ShareButton = styled.button`
  margin: 0 auto;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: ${(props) => props.color};
`;
const ShareImg = styled.img`
  /* position: absolute; */
  width: 22px;
  height: 19.5px;
  left: 12.25px;
  top: 12.25px;

  /* z-index: 1; */

  /* background: url('/img/share_button.svg'); */
`;

const BasicButton = styled.button`
  box-sizing: border-box;
  margin: auto;
  margin-bottom: 12px;
  width: 291px;
  height: 62px;
  background: #ffffff;
  opacity: 0.8;
  border: 2px solid ${(props) => props.color};
  border-radius: 15px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  text-align: center;

  color: ${(props) => props.color};
`;

const BasicButton2 = styled(BasicButton)`
  margin: auto;
  margin-top: 0;
  background: ${(props) => props.color};
  color: #ffffff;
`;

const Share = ({ bgColor, buttonColor }: any) => {
  return (
    <ShareContainer color={bgColor}>
      <ShareTitle>결과 공유하기</ShareTitle>
      <ShareButton color={buttonColor}>
        <ShareImg src="/img/share_button.svg" alt="share" />
      </ShareButton>
      <BasicButton color={buttonColor}>다른 유형 보기</BasicButton>
      <BasicButton2 color={buttonColor}>테스트 다시하기</BasicButton2>
    </ShareContainer>
  );
};

export default Share;
