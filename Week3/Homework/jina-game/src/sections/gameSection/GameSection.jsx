import GameBoardSection from "./gameBoardSection/GameBoardSection";
import GameStatusSection from "./gameStatusSection/GameStatusSection";
import * as S from "./GameSection.styles";
import { useState } from "react";

const LEVEL_TIME = {
  1: 150,
  2: 200,
  3: 300,
};

const GameSection = () => {
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(LEVEL_TIME[level]);

  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [status, setStatus] = useState("");

  const handleClickItem = (type) => {
    if (type === "mole") {
      setSuccessCount((prev) => prev + 1);
      setStatus("성공");
      return;
    }
    if (type === "bomb") {
      setFailCount((prev) => prev + 1);
      setStatus("실패");
    }
  };

  // 게임 상태 초기화
  const resetGame = () => {
    setTimeLeft(LEVEL_TIME[level]);
    setSuccessCount(0);
    setFailCount(0);
    setStatus("");
  };

  return (
    <S.Container>
      <GameStatusSection
        timeLeft={(timeLeft / 10).toFixed(1)}
        totalCount={successCount - failCount}
        successCount={successCount}
        failCount={failCount}
        status={status}
      />
      <GameBoardSection
        level={level}
        totalCount={successCount - failCount}
        setLevel={setLevel}
        setTimeLeft={setTimeLeft}
        onClickItem={handleClickItem}
        onResetGame={resetGame}
      />
    </S.Container>
  );
};

export default GameSection;
