import CardList from "@/components/home/cardList/CardList";
import * as S from "./Home.styles";
import { useState, type ChangeEvent } from "react";
import {
  VOTE_AVERAGE_FILTERS,
  type VoteAverageFilter,
} from "@/constants/rating";

const Home = () => {
  const [voteAverage, setVoteAverage] = useState<VoteAverageFilter>("all");

  const handleVoteAverageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    setVoteAverage(
      value === "all" ? "all" : (Number(value) as VoteAverageFilter),
    );
  };

  return (
    <S.Container>
      <h1>Movie Explorer</h1>
      <S.FilterBar>
        <S.RatingSelect value={voteAverage} onChange={handleVoteAverageChange}>
          {VOTE_AVERAGE_FILTERS.map((rating) => (
            <option key={rating} value={rating}>
              {rating === "all" ? "전체 별점" : `${rating}점대`}
            </option>
          ))}
        </S.RatingSelect>
      </S.FilterBar>
      <CardList voteAverage={voteAverage} />
    </S.Container>
  );
};

export default Home;
