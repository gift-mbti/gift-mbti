import styled from '@emotion/styled';

const ModalWrapper = styled.div`
  position: fixed;
  width: 375px;
  height: 38px;
  bottom: 14px;
`;
const Content = styled.div`
  width: 191px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 25px;
  background: #000000;
  box-shadow: -2px 10px 30px rgba(120, 120, 120, 0.25);
  border-radius: 19px;

  // jaman 사라질때 애니메이션 못넣나..?
  animation: show 0.5s;
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Text = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 148%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const CopyAlert = () => {
  return (
    <ModalWrapper>
      <Content>
        <Text>링크가 복사되었습니다!</Text>
      </Content>
    </ModalWrapper>
  );
};

export default CopyAlert;
