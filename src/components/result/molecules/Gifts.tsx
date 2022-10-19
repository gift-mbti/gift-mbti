import styled from '@emotion/styled';
import Tag from '../atoms/Tag';

const PresentContainer = styled.div`
  display: flex;
  margin-top: 44px;
  width: 291px;
  height: 258px;

  background: ${(props) => props.color};
  border-radius: 10px;
`;
const Container = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: column;
`;

interface BestContainerProps {
  index: number;
}
const BestContainer = styled.div<BestContainerProps>`
  width: 100%;
  margin: 23px auto auto auto;
  margin-bottom: 17px;
  text-align: center;
  border-left: ${(props) =>
    props.index === 0 ? 'none' : '1.5px solid #0000001c'};
`;

const BestTitle = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  color: ${(props) => props.color};
`;

const BestContent = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

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
  margin-bottom: 3px;
  width: 2px;
  height: 2px;

  background: ${(props) => props.color};
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

interface IGifts {
  color: string;
  bgColor: string;
  gift: string[];
  giftTag: any;
}

const Gifts = ({ color, bgColor, gift, giftTag }: IGifts) => {
  return (
    <PresentContainer color={bgColor}>
      {gift.map((g: string, index: number) => (
        <Container key={index}>
          <BestContainer index={index}>
            <BestTitle color={color}>{index + 1}위</BestTitle>
            <BestContent>{g}</BestContent>
          </BestContainer>
          <Dots>
            <Dot color={color} /> <Dot color={color} />
            <Dot color={color} /> <Dot color={color} />
          </Dots>
          <TagContainer>
            {giftTag[index].map((text: string, idx: number) => (
              <Tag key={idx} color={color} text={text} />
            ))}
          </TagContainer>
        </Container>
      ))}
    </PresentContainer>
  );
};

export default Gifts;
