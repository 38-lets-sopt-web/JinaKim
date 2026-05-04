import * as S from "./CardItem.styles";

const CardItem = ({ title, content }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.Container>
  );
};

export default CardItem;
