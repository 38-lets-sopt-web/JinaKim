import GameBoardSection from "./components/gameBoardSection/GameBoardSection";
import GameStatusSection from "./components/gameStatusSection/GameStatusSection";
import Header from "./components/header/Header";
import * as S from "./App.styles";

function App() {
  return (
    <S.AppContainer>
      <Header />
      <S.MainContent>
        <GameStatusSection />
        <GameBoardSection />
      </S.MainContent>
    </S.AppContainer>
  );
}

export default App;
