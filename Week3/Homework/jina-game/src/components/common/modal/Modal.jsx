import { useEffect } from "react";
import ModalPortal from "./Portal";
import * as S from "./Modal.styles";

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ModalPortal>
      <S.Overlay onClick={onClose}>
        <S.ModalContainer onClick={(event) => event.stopPropagation()}>
          {children}
        </S.ModalContainer>
      </S.Overlay>
    </ModalPortal>
  );
};

export default Modal;
