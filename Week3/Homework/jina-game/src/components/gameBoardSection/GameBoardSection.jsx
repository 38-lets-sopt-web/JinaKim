import { useState } from "react";
import Button from "../common/button/Button";
import BoardArea from "./boardArea/BoardArea";
import * as S from "./GameBoardSection.styles";

const GameBoardSection = () => {
  const [level, setLevel] = useState(1);

  const handleLevelChange = (e) => {
    setLevel(Number(e.target.value));
  };

  return (
    <S.Container aria-label="게임 메인 보드">
      <S.BoardHeader>
        <S.LevelSelect value={level} onChange={handleLevelChange}>
          <option value={1}>Level 1</option>
          <option value={2}>Level 2</option>
          <option value={3}>Level 3</option>
        </S.LevelSelect>
        <S.Controls>
          <Button>시작</Button>
          <Button>중단</Button>
        </S.Controls>
      </S.BoardHeader>
      <BoardArea level={level} />
    </S.Container>
  );
};

export default GameBoardSection;
