import { useState } from "react";
import * as S from "./TabBar.styles";

const TabBar = () => {
  const [selectedTab, setSelectedTab] = useState("game");

  return (
    <S.Container>
      <S.TabItem
        $isSelected={selectedTab === "game"}
        onClick={() => setSelectedTab("game")}
      >
        게임
      </S.TabItem>
      <S.TabItem
        $isSelected={selectedTab === "ranking"}
        onClick={() => setSelectedTab("ranking")}
      >
        랭킹
      </S.TabItem>
    </S.Container>
  );
};

export default TabBar;
