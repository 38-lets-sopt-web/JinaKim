import { getRatedMovies } from "@/apis/rating";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useRatedMoviesQuery = (guestId: string | null) => {
  return useQuery({
    queryKey: QUERY_KEYS.ratings.ratedMovies(guestId ?? ""),
    queryFn: () => getRatedMovies(guestId!),
    enabled: Boolean(guestId),
  });
};
