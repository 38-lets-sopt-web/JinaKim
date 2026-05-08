import * as S from "./MemberCard.styles";

interface MemberCardProps {
  name: string;
  part: string;
}

const MemberCard = ({ name, part }: MemberCardProps) => {
  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.Part>{part}</S.Part>
    </S.Container>
  );
};

export default MemberCard;
