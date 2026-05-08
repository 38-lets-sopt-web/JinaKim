import { Link } from "react-router";
import * as S from "./Header.styles";

const Header = () => {
  return (
    <S.Container>
      <S.TitleAndGreet>
        <S.Title>SOPT MEMBERS</S.Title>
        <S.Greet>안녕하세요, {}님!</S.Greet>
      </S.TitleAndGreet>
      <S.Nav>
        <Link to="/mypage">내 정보</Link>
        <Link to="/mypage/members">회원 조회</Link>
        <Link to="/login">로그아웃</Link>
      </S.Nav>
    </S.Container>
  );
};

export default Header;
