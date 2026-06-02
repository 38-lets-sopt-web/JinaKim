import { getMovieDetail, getMovieList } from "@/apis/movie";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useMovieListQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.list(),
    queryFn: getMovieList,
    select: (data) => data.results,
  });
};

export const useMovieDetailQuery = (movieId: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.detail(movieId),
    queryFn: () => getMovieDetail(movieId),
    enabled: Number.isFinite(movieId),
  });
};
