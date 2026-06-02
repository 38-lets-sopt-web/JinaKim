import { TMDB_POSTER_BASE_URL } from "@/constants/image";
import type { MovieListItem } from "@/types/movie";
import EXImg from "@assets/images/exImg.jpg";
import * as S from "./PostCard.styles";

interface PostCardProps {
  movie: MovieListItem;
}

const PostCard = ({ movie }: PostCardProps) => {
  const posterImgSrc = movie.poster_path
    ? `${TMDB_POSTER_BASE_URL}${movie.poster_path}`
    : EXImg;

  return (
    <S.Container>
      <S.CardLink to={`/${movie.id}`}>
        <S.ImgContainer src={posterImgSrc} alt={`${movie.title} 썸네일`} />
        <S.TextContainer>
          <S.Title>{movie.title}</S.Title>
          <S.Date>{movie.release_date}</S.Date>
          <S.Summary>{movie.overview}</S.Summary>
        </S.TextContainer>
      </S.CardLink>
    </S.Container>
  );
};

export default PostCard;
