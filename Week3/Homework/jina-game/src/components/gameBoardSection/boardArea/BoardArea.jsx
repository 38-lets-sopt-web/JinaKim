import * as S from "./BoardArea.styles";

const LEVEL_SIZE = {
  1: 2,
  2: 3,
  3: 4,
};

const BoardArea = ({ level }) => {
  const size = LEVEL_SIZE[level];
  const holes = Array.from({ length: size * size });

  return (
    <S.Container>
      <S.HoleContainer $size={size}>
        {holes.map((_, index) => (
          <S.Hole key={index} />
        ))}
      </S.HoleContainer>
    </S.Container>
  );
};

export default BoardArea;
