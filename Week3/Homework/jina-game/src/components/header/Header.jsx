//import Button from "../common/button/Button";
import TabBar from "../tabBar/TabBar";
import * as S from "./Header.styles";

const Header = () => {
  return (
    <S.Container>
      <S.Title>두더지게임</S.Title>
      <TabBar />
    </S.Container>
  );
};

export default Header;
