import styled from "@emotion/styled";
import Colors from "../../styles/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${Colors.Main30};
  border-radius: 10px;
  padding: 20px;
`;

export const RankingHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
