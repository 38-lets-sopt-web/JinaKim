import PostInfoSection from "@/components/postDetail/postInfoSection/PostInfoSection";
import PostMainSection from "@/components/postDetail/postmainSection/PostMainSection";
import PostRatingSection from "@/components/postDetail/postRatingSection/PostRatingSection";
import PostStorySection from "@/components/postDetail/postStorySection/PostStorySection";
import { useMovieDetailQuery } from "@/hooks/queries/useMovieQueries";
import { useParams } from "react-router";
import * as S from "./PostDetail.styles";

const PostDetail = () => {
  const { postId } = useParams();
  const movieId = Number(postId);

  const { data: movie, isLoading, isError } = useMovieDetailQuery(movieId);

  if (isLoading) {
    return <S.Container>영화 정보를 불러오는 중입니다.</S.Container>;
  }

  if (isError || !movie) {
    return <S.Container>영화 정보를 불러오지 못했습니다.</S.Container>;
  }

  return (
    <S.Container>
      <S.BackLink to="/">← 목록으로 돌아가기</S.BackLink>
      <PostMainSection
        title={movie.title}
        releaseDate={movie.release_date}
        genres={movie.genres}
        backdropPath={movie.backdrop_path}
        posterPath={movie.poster_path}
        voteAverage={movie.vote_average}
        voteCount={movie.vote_count}
        runtime={movie.runtime}
        status={movie.status}
      />
      <PostStorySection overview={movie.overview} />
      <S.BottomGrid>
        <PostInfoSection
          originalTitle={movie.original_title}
          originalLanguage={movie.original_language}
          productionCountries={movie.production_countries}
          spokenLanguages={movie.spoken_languages}
          status={movie.status}
          budget={movie.budget}
          revenue={movie.revenue}
        />
        <PostRatingSection movieId={movie.id} />
      </S.BottomGrid>
    </S.Container>
  );
};

export default PostDetail;
