import CardList from "@/components/home/cardList/CardList";
import * as S from "./Home.styles";

const Home = () => {
  const ratingOptions = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <S.Container>
      <h1>Movie Explorer</h1>
      <S.FilterBar>
        <S.RatingSelect>
          <option>전체 별점</option>
          {ratingOptions.map((rating) => (
            <option key={rating} value={rating}>
              {rating}점대
            </option>
          ))}
        </S.RatingSelect>
      </S.FilterBar>
      <CardList />
    </S.Container>
  );
};

export default Home;
