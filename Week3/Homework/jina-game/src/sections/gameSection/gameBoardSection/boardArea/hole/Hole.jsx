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
  const [isCatched, setIsCatched] = useState(false);
  const [hiddenItem, setHiddenItem] = useState(null);

  const isVisible = currentItem?.index === index;
  const itemInfo = ITEM_IMAGE[currentItem?.type];
  const isHidden = hiddenItem === currentItem;

  const handleClick = () => {
    if (isCatched || isHidden || !isVisible || !currentItem) return;

    onClickItem(currentItem.type);

    if (currentItem.type === "mole") {
      setIsCatched(true);

      setTimeout(() => {
        setIsCatched(false);
        setHiddenItem(currentItem);
      }, 700);

      return;
    }

    if (currentItem.type === "bomb") {
      setHiddenItem(currentItem);
    }
  };

  return (
    <S.Hole onClick={handleClick}>
      {isCatched && (
        <S.ItemImg src={catchtedMoleImg} alt="잡힌 두더지 이미지" />
      )}

      {!isCatched && !isHidden && isVisible && itemInfo && (
        <S.ItemImg src={itemInfo.src} alt={itemInfo.alt} />
      )}
    </S.Hole>
  );
};

export default Hole;
