import CardItem from "../../../components/common/cardItem/CardItem";
import * as S from "./GameStatusSection.styles";

const GameStatusSection = ({
  timeLeft,
  totalCount,
  successCount,
  failCount,
}) => {
  return (
    <S.Container aria-label="게임 상태 정보">
      <CardItem title="남은 시간" content={timeLeft} />
      <CardItem title="총 점수" content={totalCount} />
      <S.ResultRow>
        <CardItem title="성공" content={successCount} />
        <CardItem title="실패" content={failCount} />
      </S.ResultRow>
      <CardItem title="안내 메시지" content="~" />
    </S.Container>
  );
};

export default GameStatusSection;
