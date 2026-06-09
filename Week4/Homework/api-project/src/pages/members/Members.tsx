import ListSection from "./components/listSection/ListSection";
import SearchSection from "./components/searchSection/SearchSection";
import * as S from "./Member.styles";

const Members = () => {
  return (
    <S.Container>
      <SearchSection />
      <ListSection />
    </S.Container>
  );
};

export default Members;
