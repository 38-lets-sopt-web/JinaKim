import Header from "./components/header/Header";
import * as S from "./App.styles";
import RankingSection from "./sections/rankingSection/RankingSection";
import GameSection from "./sections/gameSection/GameSection";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("game");

  return (
    <S.AppContainer>
      <Header selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      {selectedTab === "game" && <GameSection />}
      {selectedTab === "ranking" && <RankingSection />}
    </S.AppContainer>
  );
}

export default App;
