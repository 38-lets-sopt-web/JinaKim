import Header from "./components/header/Header";
import * as S from "./App.styles";
import GameSection from "./sections/gameSection/GameSection";

function App() {
  return (
    <S.AppContainer>
      <Header />
      <GameSection />
    </S.AppContainer>
  );
}

export default App;
