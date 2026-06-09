import { useState, type FormEvent } from "react";
import ContentBox from "@/components/postDetail/contentBox/ContentBox";
import * as S from "./PostRatingSection.styles";
import {
  useDeleteRatingMutation,
  usePostRatingMutation,
} from "@/hooks/mutations/useRatingMutations";
import { useRatedMoviesQuery } from "@/hooks/queries/useRatingQueries";
import { STORAGE_KEYS } from "@/constants/storageKeys";

interface PostRatingSectionProps {
  movieId: number;
}

const PostRatingSection = ({ movieId }: PostRatingSectionProps) => {
  const [editedRating, setEditedRating] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const guestId = sessionStorage.getItem(STORAGE_KEYS.guestSessionId);

  const { data: ratedMovies } = useRatedMoviesQuery(guestId);

  const { mutate: submitRating, isPending: isSubmitting } =
    usePostRatingMutation();

  const { mutate: deleteRating, isPending: isDeleting } =
    useDeleteRatingMutation();

  const ratedMovie = ratedMovies?.results.find((movie) => movie.id === movieId);

  const savedRating = ratedMovie ? String(ratedMovie.rating) : "";

  const displayedRating = editedRating ?? savedRating;

  const handleRatingSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!guestId) {
      setMessage("세션 정보를 찾을 수 없습니다.");
      return;
    }

    const ratingValue = Number(displayedRating);

    submitRating(
      {
        guestId,
        movieId,
        value: ratingValue,
      },
      {
        onSuccess: () => {
          setEditedRating(null);
          setMessage("Successfully rated.");
        },

        onError: () => {
          setMessage("Failed to rate.");
        },
      },
    );
  };

  const handleRatingDelete = () => {
    if (!guestId) {
      setMessage("세션 정보를 찾을 수 없습니다.");
      return;
    }

    deleteRating(
      {
        guestId,
        movieId,
      },
      {
        onSuccess: () => {
          setEditedRating(null);
          setMessage("Successfully deleted.");
        },

        onError: () => {
          setMessage("Failed to delete.");
        },
      },
    );
  };

  return (
    <ContentBox title="별점 남기기">
      <S.Form onSubmit={handleRatingSubmit}>
        <S.Label htmlFor="rating">0.5 ~ 10.0</S.Label>

        <S.Input
          id="rating"
          type="number"
          min="0.5"
          max="10"
          step="0.5"
          value={displayedRating}
          onChange={(e) => setEditedRating(e.target.value)}
        />

        <S.ButtonGroup>
          <S.SubmitButton type="submit" disabled={isSubmitting || isDeleting}>
            {isSubmitting ? "등록 중..." : "별점 남기기"}
          </S.SubmitButton>

          <S.DeleteButton
            type="button"
            onClick={handleRatingDelete}
            disabled={isSubmitting || isDeleting}
          >
            {isDeleting ? "삭제 중..." : "별점 삭제하기"}
          </S.DeleteButton>
        </S.ButtonGroup>

        {message && <p>{message}</p>}
      </S.Form>
    </ContentBox>
  );
};

export default PostRatingSection;
