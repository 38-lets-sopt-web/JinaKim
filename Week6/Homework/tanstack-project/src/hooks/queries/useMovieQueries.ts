import { getMovieDetail, getMovieList } from "@/apis/movie";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovieListQuery = () => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.movies.list(),
    queryFn: ({ pageParam }) => getMovieList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.total_pages) return undefined;

      return lastPage.page + 1;
    },
    select: (data) => data.pages.flatMap((page) => page.results),
  });
};

export const useMovieDetailQuery = (movieId: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.detail(movieId),
    queryFn: () => getMovieDetail(movieId),
    enabled: Number.isFinite(movieId),
  });
};
