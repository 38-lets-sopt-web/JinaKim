import { useMovieListQuery } from "@/hooks/queries/useMovieQueries";
import * as S from "./CardList.styles";
import PostCard from "./postCard/PostCard";

const CardList = () => {
  const { data = [] } = useMovieListQuery();
  console.log(data);
  return (
    <S.Container>
      {data.map((item) => (
        <PostCard key={item.id} movie={item} />
      ))}
    </S.Container>
  );
};

export default CardList;
