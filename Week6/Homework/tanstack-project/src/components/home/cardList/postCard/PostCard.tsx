import * as S from "./PostCard.styles";
import EXImg from "@assets/images/exImg.jpg";

const PostCard = () => {
  const postId = 1;

  return (
    <S.Container>
      <S.CardLink to={`/${postId}`}>
        <S.ImgContainer src={EXImg} alt="영화 썸네일" />
        <S.TextContainer>
          <S.Title>프로젝트</S.Title>
          <S.Date>날짜</S.Date>
          <S.Summary>요약본머라머라</S.Summary>
        </S.TextContainer>
      </S.CardLink>
    </S.Container>
  );
};

export default PostCard;
