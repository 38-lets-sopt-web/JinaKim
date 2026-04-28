import CardItem from "../../../components/common/cardItem/CardItem";
import * as S from "./GameStatusSection.styles";

const GameStatusSection = ({ timeLeft }) => {
  return (
    <S.Container aria-label="게임 상태 정보">
      <CardItem title="남은 시간" content={timeLeft} />
      <CardItem title="총 점수" content="0" />
      <S.ResultRow>
        <CardItem title="성공" content="0" />
        <CardItem title="실패" content="0" />
      </S.ResultRow>
      <CardItem title="안내 메시지" content="~" />
    </S.Container>
  );
};

export default GameStatusSection;
