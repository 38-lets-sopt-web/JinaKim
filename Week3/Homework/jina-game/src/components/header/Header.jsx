import TabBar from "../tabBar/TabBar";
import * as S from "./Header.styles";

const Header = ({ selectedTab, onSelectTab }) => {
  return (
    <S.Container>
      <S.Title>두더지게임</S.Title>
      <TabBar selectedTab={selectedTab} onSelectTab={onSelectTab} />
    </S.Container>
  );
};

export default Header;
