import * as S from "./BoardArea.styles";
import moleImg from "../../../../assets/mole.png";
import bombImg from "../../../../assets/bomb.webp";

const ITEM_IMAGE = {
  mole: {
    src: moleImg,
    alt: "두더지 이미지",
  },
  bomb: {
    src: bombImg,
    alt: "폭탄 이미지",
  },
};

const BoardArea = ({ size, holeCount, currentItem }) => {
  const holes = Array.from({ length: holeCount });

  return (
    <S.Container>
      <S.HoleContainer $size={size}>
        {holes.map((_, index) => {
          const isVisible = currentItem?.index === index;
          const itemInfo = ITEM_IMAGE[currentItem?.type];

          return (
            <S.Hole key={index}>
              {isVisible && itemInfo && (
                <S.ItemImg src={itemInfo.src} alt={itemInfo.alt} />
              )}
            </S.Hole>
          );
        })}
      </S.HoleContainer>
    </S.Container>
  );
};

export default BoardArea;
