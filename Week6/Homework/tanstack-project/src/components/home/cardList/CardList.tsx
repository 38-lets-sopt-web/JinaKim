import * as S from "./CardList.styles";
import PostCard from "./postCard/PostCard";

const CardList = () => {
  return (
    <S.Container>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </S.Container>
  );
};

export default CardList;
