import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';

const Container = styled.div`
  position: relative;
  font-family: 'Pretendard Variable', sans-serif;
  width: 136px;
  height: 204px;
  top: 14px;
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
  color: black;
`;

const SmallCardText = styled.p`
  position: relative;
  height: 32px;
  margin-left: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
`;

const NonCardText = styled(SmallCardText)`
  width: 84px;
  height: 50px;
  margin: 34px 20px 41px;
`;

const ImgContainer = styled.div`
  box-sizing: border-box;
  width: 101px;
  height: 80px;
  margin-top: 3px;
  margin-left: auto;
  /* background-color: red; */
`;

const DetailButton = styled.button`
  position: relative;
  font-family: 'Pretendard Variable', sans-serif;
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
  cursor: pointer;
  :hover {
    opacity: 80%;
  }
`;

interface SmallCardProps {
  chemi: string[];
  type: string;
  color: string;
}

const SmallCard = ({ chemi, type, color }: SmallCardProps) => {
  const CardImg = `/img/Avatar/image${chemi[1]}.jpg`;

  return (
    <Container>
      <SmallCardTitle>
        {type === 'best' ? '환상의 캐미' : '파국의 캐미'}
      </SmallCardTitle>
      {chemi[0] ? (
        <>
          <SmallCardText>{chemi[0]}</SmallCardText>
          <ImgContainer>
            <Image src={CardImg} width={90} height={75} alt="small avatar" />
          </ImgContainer>
          {/* next/link 적용 */}
          <Link href={chemi[2]}>
            <DetailButton color={color}>자세히 보기</DetailButton>
          </Link>
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
