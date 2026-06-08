import { useState } from "react";
import Button from "../../components/common/button/Button";
import { getGameRecords, removeGameRecords } from "../../utils/gameStorage";
import * as S from "./RankingSection.styles";
import RankingTable from "./rankingTable/RankingTable";

const RankingSection = () => {
  const [gameRecords, setGameRecords] = useState(getGameRecords());

  const resetRecords = () => {
    const isConfirmed = window.confirm("정말 랭킹 기록을 초기화하시겠습니까?");

    if (!isConfirmed) return;

    removeGameRecords();
    setGameRecords([]);
  };

  return (
    <S.Container>
      <S.RankingHeader>
        <h2>랭킹 보드</h2>
        <Button onClick={resetRecords}>기록 초기화</Button>
      </S.RankingHeader>
      <RankingTable gameRecords={gameRecords} />
    </S.Container>
  );
};

export default RankingSection;
