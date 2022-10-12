import styled from '@emotion/styled';

const ShareBtn = styled.button`
  margin: 0 auto;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: ${(props) => props.color};
`;
const ShareImg = styled.img`
  width: 22px;
  height: 19.5px;
  left: 12.25px;
  top: 12.25px;
`;

interface IShareButton {
  color: string;
}

const ShareButton = ({ color }: IShareButton) => {
  return (
    <ShareBtn color={color}>
      <ShareImg src="/img/share_button.svg" alt="share" />
    </ShareBtn>
  );
};

export default ShareButton;