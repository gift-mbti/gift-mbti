import styled from '@emotion/styled';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';

const ErrorWrapper = styled.div`
  position: relative;
`;
const ErrorTitle = styled.p`
  height: 25px;
  font-family: 'Pretendard';
  font-weight: 800;
  font-size: 25px;
  line-height: 100%;
  letter-spacing: 0.02em;
  text-align: center;
  margin-top: 86px;
`;

const ErrorSubTitle = styled.p`
  height: 36px;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 13px;
  line-height: 140%;
  text-align: center;
  color: #514e4e;
  white-space: pre-wrap;
  margin-top: 22px;
`;

const BeforeBtn = styled.button`
  position: absolute;
  width: 136px;
  height: 56px;
  left: 42px;
  top: 522px;
  background: #ffffff;
  font-family: 'Pretendard';
  border: 2px solid #fe5756;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: #fe5756;
  cursor: pointer;
`;
const HomeBtn = styled.button`
  position: absolute;
  width: 136px;
  height: 56px;
  right: 42px;
  top: 522px;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  background: #fe5756;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const Error = () => {
  const router = useRouter();
  const errorSubTitle = `일부러 찾아온게 아니라면 입력한 \n 주소를 다시 확인 해 주세요.`;

  const handleMoveToBefore = () => {
    router.back();
  };

  const handleMoveToHome = () => {
    router.push('/');
  };
  return (
    <ErrorWrapper>
      <ErrorTitle>너무 멀리왔어요!</ErrorTitle>
      <ErrorSubTitle>{errorSubTitle}</ErrorSubTitle>
      <Image
        src="/img/errorImg2.png"
        width={375}
        height={568}
        style={{
          marginTop: '17px',
        }}
      />
      <BeforeBtn onClick={handleMoveToBefore}>이전 페이지</BeforeBtn>
      <HomeBtn onClick={handleMoveToHome}>홈 화면</HomeBtn>
    </ErrorWrapper>
  );
};

export default Error;
