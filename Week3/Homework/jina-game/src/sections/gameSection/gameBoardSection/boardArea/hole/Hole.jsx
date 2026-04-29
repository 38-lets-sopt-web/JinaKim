import * as S from "./Hole.styles";
import moleImg from "../../../../../assets/mole2.jpg";
import catchtedMoleImg from "../../../../../assets/catchedMole.jpg";
import bombImg from "../../../../../assets/bomb.webp";
import { useState } from "react";

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

const Hole = ({ index, currentItem, onClickItem }) => {
  const isVisible = currentItem?.index === index;
  const itemInfo = ITEM_IMAGE[currentItem?.type];

  const [isCatched, setIsCatched] = useState(false);

  const handleClick = () => {
    if (!isVisible || !currentItem) return;

    onClickItem(currentItem.type);

    if (currentItem.type === "mole") {
      setIsCatched(true);
      setTimeout(() => {
        setIsCatched(false);
        //setIsHidden(true);
      }, 700);
    }
  };

  return (
    <S.Hole onClick={handleClick}>
      {isVisible && itemInfo && (
        <S.ItemImg
          src={isCatched ? catchtedMoleImg : itemInfo.src}
          alt={isCatched ? "잡힌 두더지 이미지" : itemInfo.alt}
        />
      )}
    </S.Hole>
  );
};

export default Hole;
