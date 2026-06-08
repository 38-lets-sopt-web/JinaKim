import Modal from "../common/modal/Modal";
import * as S from "./GameOverModal.styles";

const GameOverModal = ({ level, score, onClose }) => {
  return (
    <Modal onClose={onClose}>
      <S.Container>
        <p>Level {level} 게임 종료!</p>
        <S.TotalCount>최종 점수 : {score}점</S.TotalCount>
        <p>2초 후 게임이 리셋됩니다... </p>
      </S.Container>
    </Modal>
  );
};

export default GameOverModal;
