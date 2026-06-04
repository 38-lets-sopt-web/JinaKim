import { useMovieListQuery } from "@/hooks/queries/useMovieQueries";
import * as S from "./CardList.styles";
import PostCard from "./postCard/PostCard";
import { useEffect, useRef } from "react";

const CardList = () => {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const {
    data: movies = [],
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useMovieListQuery();

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        rootMargin: "500px",
      },
    );

    observer.observe(loaderRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <S.Container>
      {movies.map((movie) => (
        <PostCard key={movie.id} movie={movie} />
      ))}
      <div ref={loaderRef} />

      {isFetchingNextPage && <p>불러오는 중...</p>}
    </S.Container>
  );
};

export default CardList;
