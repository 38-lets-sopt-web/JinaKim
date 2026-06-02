import { deleteRating, postRating } from "@/apis/rating";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostRatingMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postRating,

    onSuccess: (_, { guestId }) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.ratings.ratedMovies(guestId),
      });
    },
  });
};

export const useDeleteRatingMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteRating,

    onSuccess: (_, { guestId }) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.ratings.ratedMovies(guestId),
      });
    },
  });
};
