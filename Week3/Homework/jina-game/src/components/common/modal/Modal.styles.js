import styled from "@emotion/styled";
import Colors from "../../../styles/Colors";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.div`
  background-color: ${Colors.Main20};
  border-radius: 10px;
`;
