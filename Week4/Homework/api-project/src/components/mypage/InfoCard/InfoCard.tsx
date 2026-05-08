import * as S from "./InfoCard.styles";

interface InfoItem {
  label: string;
  value: string | number;
}

interface InfoCardProps {
  items: InfoItem[];
}

const InfoCard = ({ items }: InfoCardProps) => {
  return (
    <S.Container>
      {items.map((item) => (
        <S.Info key={item.label}>
          <S.InfoLabel>{item.label}</S.InfoLabel>
          <S.InfoContent>{item.value}</S.InfoContent>
        </S.Info>
      ))}
    </S.Container>
  );
};

export default InfoCard;
