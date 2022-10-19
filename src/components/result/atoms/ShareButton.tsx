import styled from '@emotion/styled';

const ShareBtn = styled.button`
  margin: 0 auto;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: ${(props) => props.color};
  cursor: pointer;
`;
const ShareImg = styled.img`
  width: 22px;
  height: 19.5px;
  left: 12.25px;
  top: 12.25px;
`;

interface IShareButton {
  color: string;
  onClick: () => void;
}

const ShareButton = ({ onClick, color }: IShareButton) => {
  return (
    <ShareBtn onClick={onClick} color={color}>
      <ShareImg src="/img/share_button.svg" alt="share" />
    </ShareBtn>
  );
};

export default ShareButton;
