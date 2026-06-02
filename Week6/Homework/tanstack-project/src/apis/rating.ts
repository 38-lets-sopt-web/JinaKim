import type {
  DeleteRatingParams,
  PostRatingParams,
  RatedMoviesResponse,
} from "@/types/rating";
import api from "./instance";

export const postRating = async ({
  guestId,
  movieId,
  value,
}: PostRatingParams) => {
  await api.post(
    `/movie/${movieId}/rating`,
    {
      value,
    },
    {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        guest_session_id: guestId,
      },
    },
  );
};

export const deleteRating = async ({
  guestId,
  movieId,
}: DeleteRatingParams) => {
  await api.delete(`/movie/${movieId}/rating`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      guest_session_id: guestId,
    },
  });
};

export const getRatedMovies = async (guestId: string) => {
  const { data } = await api.get<RatedMoviesResponse>(
    `/guest_session/${guestId}/rated/movies`,
    {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
      },
    },
  );

  return data;
};
