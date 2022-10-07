import styled from '@emotion/styled';

const PresentContainer = styled.div`
  /* position: absolute; */
  margin-top: 44px;
  width: 291px;
  height: 258px;

  background: ${(props) => props.color};
  border-radius: 10px;
`;
const PickContainer = styled.div`
  /* position: absolute; */
  width: 76px;
  height: 48px;
  margin: 10px 14px 0 229px;
  /* left: 285px;
  top: 992px; */
  z-index: 1;

  background: ${(props) => props.color};
  border-radius: 0px 20px 20px 18px;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const PickText = styled.p`
  position: absolute;
  width: 32px;
  height: 25px;

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
const Container = styled.div`
  display: flex;
`;
const BestContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const BestTitle = styled.div``;
const BestContent = styled.div``;
const Divider = styled.div``;
const Dots = styled.div``;
const TagContainer = styled.div``;
const Tags = styled.div``;

const Pick = ({ pickColor, bgColor, gift, giftTag }: any) => {
  return (
    <div>
      <PickContainer color={pickColor}>
        <PickText>
          브랜드
          <br />
          pick!
        </PickText>
      </PickContainer>
      <PresentContainer color={bgColor}>
        <Container>
          {gift.map((item: any, index: number) => {
            return (
              <BestContainer>
                <BestTitle>{index + 1}위</BestTitle>
                <BestContent>{item}</BestContent>
                <Divider />
                <Dots />
              </BestContainer>
            );
          })}
        </Container>
        <Container>
          {giftTag.map((item: any, index: number) => {
            return (
              <TagContainer>
                {item.map((i: any) => {
                  return <Tags>{i}</Tags>;
                })}
              </TagContainer>
            );
          })}
        </Container>
      </PresentContainer>
    </div>
  );
};

export default Pick;
