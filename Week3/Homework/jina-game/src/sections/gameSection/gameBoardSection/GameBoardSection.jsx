import { useRef, useState } from "react";
import BoardArea from "./boardArea/BoardArea";
import Button from "./../../../components/common/button/Button";
import * as S from "./GameBoardSection.styles";

const LEVEL_SIZE = {
  1: 2,
  2: 3,
  3: 4,
};

const LEVEL_TIME = {
  1: 15,
  2: 20,
  3: 30,
};

const GameBoardSection = ({ level, setLevel, setTimeLeft }) => {
  const [currentItem, setCurrentItem] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const itemIntervalRef = useRef(null);
  const timerIntervalRef = useRef(null);

  const size = LEVEL_SIZE[level];
  const holeCount = size * size;

  // 레벨 선택
  const handleLevelChange = (e) => {
    const selectedLevel = Number(e.target.value);

    setLevel(selectedLevel);
    setTimeLeft(LEVEL_TIME[selectedLevel]);
    setCurrentItem(null);
  };

  // 랜덤한 위치에 랜덤한 아이템 위치 시키기
  const generateRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * holeCount);
    const randomType = Math.random() < 0.7 ? "mole" : "bomb";

    setCurrentItem({
      index: randomIndex,
      type: randomType,
    });
  };

  // 게임 시작
  const handleStartGame = () => {
    if (itemIntervalRef.current) return;

    setTimeLeft(LEVEL_TIME[level]);
    generateRandomItem();
    setIsPlaying(true);

    itemIntervalRef.current = setInterval(() => {
      generateRandomItem();
    }, 1000);

    timerIntervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(itemIntervalRef.current);
          clearInterval(timerIntervalRef.current);

          itemIntervalRef.current = null;
          timerIntervalRef.current = null;

          setCurrentItem(null);
          setIsPlaying(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // 게임 중단
  const handleStopGame = () => {
    clearInterval(itemIntervalRef.current);
    clearInterval(timerIntervalRef.current);

    itemIntervalRef.current = null;
    timerIntervalRef.current = null;

    setCurrentItem(null);
    setTimeLeft(LEVEL_TIME[level]);
    setIsPlaying(false);
  };

  return (
    <S.Container aria-label="게임 메인 보드">
      <S.BoardHeader>
        <S.LevelSelect
          disabled={isPlaying}
          value={level}
          onChange={handleLevelChange}
        >
          <option value={1}>Level 1</option>
          <option value={2}>Level 2</option>
          <option value={3}>Level 3</option>
        </S.LevelSelect>
        <S.Controls>
          <Button onClick={handleStartGame}>시작</Button>
          <Button onClick={handleStopGame}>중단</Button>
        </S.Controls>
      </S.BoardHeader>
      <BoardArea size={size} holeCount={holeCount} currentItem={currentItem} />
    </S.Container>
  );
};

export default GameBoardSection;
