import styled from "@emotion/styled";
import Colors from "../../../styles/Colors";

export const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: ${Colors.Main30};
  border-radius: 10px;
`;

export const BoardHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const LevelSelect = styled.select`
  padding: 0 10px;
  border: none;
  border-radius: 5px;
  background-color: ${Colors.Main20};
  font-weight: 600;
`;

export const Controls = styled.div`
  display: flex;
  gap: 5px;
`;
