import type { MovieDetail, MovieListResponse } from "@/types/movie";
import api from "./instance";
import type { VoteAverageFilter } from "@/constants/rating";

interface GetMovieListParams {
  page: number;
  voteAverage?: VoteAverageFilter;
}

export const getMovieList = async ({
  page,
  voteAverage = "all",
}: GetMovieListParams) => {
  const voteAverageParams =
    voteAverage === "all"
      ? {}
      : {
          "vote_average.gte": voteAverage,
          "vote_average.lte": voteAverage === 10 ? 10 : voteAverage + 0.999,
        };

  const { data } = await api.get<MovieListResponse>("/discover/movie", {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      page,
      ...voteAverageParams,
    },
  });

  return data;
};

export const getMovieDetail = async (movieId: number) => {
  const { data } = await api.get<MovieDetail>(`/movie/${movieId}`, {
    params: { api_key: import.meta.env.VITE_API_KEY, language: "ko-KR" },
  });

  return data;
};
