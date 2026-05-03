import * as S from "./BoardArea.styles";
import Hole from "./hole/Hole";

const BoardArea = ({ size, holeCount, currentItem, onClickItem }) => {
  const holes = Array.from({ length: holeCount });

  return (
    <S.Container>
      <S.HoleContainer $size={size}>
        {holes.map((_, index) => (
          <Hole
            key={index}
            index={index}
            currentItem={currentItem}
            onClickItem={onClickItem}
          />
        ))}
      </S.HoleContainer>
    </S.Container>
  );
};

export default BoardArea;
