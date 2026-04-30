import { useEffect, useRef, useState } from "react";
import BoardArea from "./boardArea/BoardArea";
import Button from "./../../../components/common/button/Button";
import * as S from "./GameBoardSection.styles";
import { saveGameRecord } from "../../../utils/gameStorage";

const LEVEL_SIZE = {
  1: 2,
  2: 3,
  3: 4,
};

const LEVEL_TIME = {
  1: 150,
  2: 200,
  3: 300,
};

const GameBoardSection = ({
  level,
  totalCount,
  setLevel,
  setTimeLeft,
  onClickItem,
  onResetGame,
}) => {
  const [currentItem, setCurrentItem] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const itemIntervalRef = useRef(null);
  const timerIntervalRef = useRef(null);
  const timeLeftRef = useRef(LEVEL_TIME[level]);
  const totalCountRef = useRef(totalCount);

  const size = LEVEL_SIZE[level];
  const holeCount = size * size;

  useEffect(() => {
    totalCountRef.current = totalCount;
  }, [totalCount]);

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

  // 게임 정리 (타이머, 랜덤 아이템 정리)
  const clearGameInterval = () => {
    clearInterval(itemIntervalRef.current);
    clearInterval(timerIntervalRef.current);

    itemIntervalRef.current = null;
    timerIntervalRef.current = null;

    setCurrentItem(null);
    setIsPlaying(false);
  };

  // 게임 중단
  const handleStopGame = () => {
    clearGameInterval();
    onResetGame();
  };

  // 게임 종료
  const handleEndGame = () => {
    alert(`게임 종료! ${totalCountRef.current}점입니다`);

    const newRecord = {
      id: crypto.randomUUID(),
      level: level,
      score: totalCountRef.current,
      date: new Date().toISOString(),
    };

    saveGameRecord(newRecord);

    clearGameInterval();
    onResetGame();
  };

  // 게임 시작
  const handleStartGame = () => {
    if (itemIntervalRef.current) return;
    timeLeftRef.current = LEVEL_TIME[level];

    setTimeLeft(timeLeftRef.current);
    generateRandomItem();
    setIsPlaying(true);

    itemIntervalRef.current = setInterval(() => {
      generateRandomItem();
    }, 1000);

    timerIntervalRef.current = setInterval(() => {
      timeLeftRef.current -= 1;

      if (timeLeftRef.current <= 0) {
        setTimeLeft(0);

        setTimeout(() => {
          handleEndGame();
        }, 0);

        return;
      }

      setTimeLeft(timeLeftRef.current);
    }, 100);
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
      <BoardArea
        size={size}
        holeCount={holeCount}
        currentItem={currentItem}
        onClickItem={onClickItem}
      />
    </S.Container>
  );
};

export default GameBoardSection;
