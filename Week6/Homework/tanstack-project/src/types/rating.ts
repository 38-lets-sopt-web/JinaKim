export interface PostRatingParams {
  guestId: string;
  movieId: number;
  value: number;
}

export type DeleteRatingParams = Omit<PostRatingParams, "value">;

export interface RatedMovie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  rating: number;
}

export interface RatedMoviesResponse {
  page: number;
  results: RatedMovie[];
  total_pages: number;
  total_results: number;
}
