import * as S from "./TabBar.styles";

const TabBar = ({ selectedTab, onSelectTab }) => {
  return (
    <S.Container>
      <S.TabItem
        $isSelected={selectedTab === "game"}
        onClick={() => onSelectTab("game")}
      >
        게임
      </S.TabItem>
      <S.TabItem
        $isSelected={selectedTab === "ranking"}
        onClick={() => onSelectTab("ranking")}
      >
        랭킹
      </S.TabItem>
    </S.Container>
  );
};

export default TabBar;
