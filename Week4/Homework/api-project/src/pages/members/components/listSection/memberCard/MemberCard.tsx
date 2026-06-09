import { useNavigate } from "react-router";
import * as S from "./MemberCard.styles";
import type { UserItem } from "../../../../../types/userType";

interface MemberCardProps {
  user: UserItem;
}

const MemberCard = ({ user }: MemberCardProps) => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate(`${user.id}`)}>
      <S.Name>{user.name}</S.Name>
      <S.Part>{user.part}</S.Part>
    </S.Container>
  );
};

export default MemberCard;
