import {
  TMDB_BACKDROP_BASE_URL,
  TMDB_POSTER_BASE_URL,
} from "@/constants/image";
import EXImg from "@assets/images/exImg.jpg";
import * as S from "./PostMainSection.styles";

interface PostMainSectionProps {
  title: string;
  releaseDate: string;
  genres: {
    id: number;
    name: string;
  }[];
  backdropPath: string | null;
  posterPath: string | null;
  voteAverage: number;
  voteCount: number;
  runtime: number | null;
  status: string;
}

const formatReleaseDate = (releaseDate: string) => {
  return releaseDate ? releaseDate.replaceAll("-", ".") : "개봉일 정보 없음";
};

const formatRuntime = (runtime: number | null) => {
  if (!runtime) return "상영 시간 정보 없음";

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (hours === 0) return `${minutes}분`;

  return `${hours}시간 ${minutes}분`;
};

const PostMainSection = ({
  title,
  releaseDate,
  genres,
  backdropPath,
  posterPath,
  voteAverage,
  voteCount,
  runtime,
  status,
}: PostMainSectionProps) => {
  const backdropImgSrc = backdropPath
    ? `${TMDB_BACKDROP_BASE_URL}${backdropPath}`
    : EXImg;

  const posterImgSrc = posterPath
    ? `${TMDB_POSTER_BASE_URL}${posterPath}`
    : EXImg;

  const movieStats = [
    { label: "평점", value: `${voteAverage.toFixed(1)} / 10` },
    { label: "투표 수", value: voteCount.toLocaleString() },
    { label: "상영 시간", value: formatRuntime(runtime) },
    { label: "상태", value: status },
  ];

  return (
    <S.Container>
      <S.MainImg src={backdropImgSrc} alt={`${title} 배경 이미지`} />
      <S.Info>
        <S.PosterImg src={posterImgSrc} alt={`${title} 포스터`} />
        <S.TextInfo>
          <S.Date>{formatReleaseDate(releaseDate)}</S.Date>
          <S.Title>{title}</S.Title>
          <S.TagList>
            {genres.map((genre) => (
              <S.Tag key={genre.id}>{genre.name}</S.Tag>
            ))}
          </S.TagList>
          <S.GridBox>
            {movieStats.map(({ label, value }) => (
              <S.BoxItem key={label}>
                <S.ItemTitle>{label}</S.ItemTitle>
                <S.ItemInfo>{value}</S.ItemInfo>
              </S.BoxItem>
            ))}
          </S.GridBox>
        </S.TextInfo>
      </S.Info>
    </S.Container>
  );
};

export default PostMainSection;
