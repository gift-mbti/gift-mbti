import styled from '@emotion/styled';
import Router from 'next/router';

const Container = styled.div`
  position: relative;
  width: 136px;
  height: 204px;
  top: 34px;

  box-shadow: 0px 10px 35px rgba(120, 120, 120, 0.25);
  border-radius: 10px;
`;

const SmallCardTitle = styled.p`
  position: relative;
  margin: 20px 20px 10px;
  width: 85px;
  height: 18px;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
`;

const SmallCardText = styled.p`
  position: relative;
  height: 32px;
  margin-left: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
`;

const NonCardText = styled(SmallCardText)`
  width: 84px;
  height: 50px;
  margin: 34px 20px 41px;
`;

const Image = styled.img`
  position: relative;
  width: 76px;
  height: 59px;
  margin: 12px 45px 5px;
`;

const DetailButton = styled.button`
  position: relative;
  width: 100%;
  height: 39px;
  margin-top: 3px;
  background: ${(props) => props.color};
  border-radius: 0px 0px 10px 10px;
  border: none;

  font-weight: 700;
  font-size: 13px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;

  :hover {
    background-color: #cccccc;
  }
`;

interface ISmallCard {
  chemi: string;
  type: string;
  color: string;
}

const SmallCard = ({ chemi, type, color }: ISmallCard) => {
  const gotoOtherMbti = () => {
    Router.push(chemi[2]);
  };
  return (
    <Container>
      <SmallCardTitle>
        {type === 'best' ? '환상의 캐미' : '파국의 캐미'}
      </SmallCardTitle>
      {chemi[0] ? (
        <>
          <SmallCardText>{chemi[0]}</SmallCardText>
          <Image src={chemi[1]} />
          <DetailButton onClick={gotoOtherMbti} color={color}>
            자세히 보기
          </DetailButton>
        </>
      ) : (
        <>
          <NonCardText>
            파국이 뭔가요?
            <br />
            대체로 모두와
            <br />잘 어울려요!
          </NonCardText>
          <DetailButton color="#CCCCCC">자세히 보기</DetailButton>
        </>
      )}
    </Container>
  );
};

export default SmallCard;
