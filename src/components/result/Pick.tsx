import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: relative;
`;

const PickContainer = styled.div`
  position: absolute;
  width: 76px;
  height: 48px;
  left: 243px;
  bottom: 270px;
  z-index: 1;

  background: ${(props) => props.color};
  border-radius: 0px 20px 20px 18px;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const PickText = styled.p`
  position: absolute;
  width: 32px;
  height: 25px;
  left: 22px;
  z-index: 1;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  /* or 12px */

  text-align: center;

  color: #ffffff;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const Caution = styled.div`
  margin-top: 15px;
  text-align: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 100%;

  color: #bbb6b6;
`;

const PresentContainer = styled.div`
  /* position: absolute; */
  margin-top: 44px;
  width: 291px;
  height: 258px;

  background: ${(props) => props.color};
  border-radius: 10px;
  display: flex;
`;
const Container = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: column;
`;
const BestContainer = styled.div`
  margin: auto;
  margin-top: 23px;
  margin-bottom: 17px;
  text-align: center;
`;

const BestTitle = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;

  text-align: center;

  color: ${(props) => props.color};
`;
const BestContent = styled.div`
  margin-top: 10px;
  width: 54px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
`;
const Dots = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 17px;
`;

const Dot = styled.div`
  /* position: absolute; */
  margin-bottom: 3px;
  width: 2px;
  height: 2px;
  /* left: 503px;
  top: 1222px; */

  background: ${(props) => props.color};
`;

const TagContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const Tag = styled.div`
  padding: 5px 10px;
  gap: 10px;
  margin: auto;

  background: #ffffff;
  border: 1.5px solid ${(props) => props.color};
  border-radius: 18px;
  justify-content: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 148%;
  text-align: center;
  letter-spacing: 0.02em;

  color: ${(props) => props.color};

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Pick = ({ pickColor, bgColor, gift, giftTag, pickTextColor }: any) => {
  return (
    <Wrapper>
      <PickContainer color={pickColor}>
        <PickText>
          브랜드
          <br />
          pick!
        </PickText>
      </PickContainer>
      <PresentContainer color={bgColor}>
        {gift.map((g: string, index: number) => (
          <Container>
            <BestContainer>
              <BestTitle color={pickTextColor}>{index + 1}위</BestTitle>
              <BestContent>{g}</BestContent>
            </BestContainer>
            <Dots>
              <Dot color={pickTextColor} /> <Dot color={pickTextColor} />
              <Dot color={pickTextColor} /> <Dot color={pickTextColor} />
            </Dots>

            <TagContainer>
              {giftTag[index].map((i: string) => (
                <Tag color={pickTextColor}>{i}</Tag>
              ))}
            </TagContainer>
          </Container>
        ))}
      </PresentContainer>
      <Caution> *자체 설문조사를 통해 자료를 수집하였습니다. </Caution>
    </Wrapper>
  );
};

export default Pick;
