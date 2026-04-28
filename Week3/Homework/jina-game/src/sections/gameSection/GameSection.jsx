import GameBoardSection from "./gameBoardSection/GameBoardSection";
import GameStatusSection from "./gameStatusSection/GameStatusSection";
import * as S from "./GameSection.styles";
import { useState } from "react";

const LEVEL_TIME = {
  1: 15,
  2: 20,
  3: 30,
};

const GameSection = () => {
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(LEVEL_TIME[level]);

  return (
    <S.Container>
      <GameStatusSection timeLeft={timeLeft} />
      <GameBoardSection
        level={level}
        setLevel={setLevel}
        setTimeLeft={setTimeLeft}
      />
    </S.Container>
  );
};

export default GameSection;
