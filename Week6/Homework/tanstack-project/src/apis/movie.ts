import type { MovieDetail, MovieListResponse } from "@/types/movie";
import api from "./instance";

export const getMovieList = async () => {
  const { data } = await api.get<MovieListResponse>("/discover/movie", {
    params: { api_key: import.meta.env.VITE_API_KEY },
  });

  return data;
};

export const getMovieDetail = async (movieId: number) => {
  const { data } = await api.get<MovieDetail>(`/movie/${movieId}`, {
    params: { api_key: import.meta.env.VITE_API_KEY, language: "ko-KR" },
  });

  return data;
};
