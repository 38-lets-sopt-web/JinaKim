import { Link, useNavigate } from "react-router";
import * as S from "./Header.styles";

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <S.Container>
      <S.TitleAndGreet>
        <S.Title>SOPT MEMBERS</S.Title>
        <S.Greet>안녕하세요, {name}님!</S.Greet>
      </S.TitleAndGreet>
      <S.Nav>
        <Link to="/mypage">내 정보</Link>
        <Link to="/mypage/members">회원 조회</Link>
        <button type="button" onClick={handleLogout}>
          로그아웃
        </button>
      </S.Nav>
    </S.Container>
  );
};

export default Header;
