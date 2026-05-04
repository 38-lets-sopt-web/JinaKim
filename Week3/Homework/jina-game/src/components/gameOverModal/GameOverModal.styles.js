import styled from "@emotion/styled";
import Colors from "../../styles/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 300px;
  padding: 30px;
`;

export const TotalCount = styled.p`
  color: ${Colors.Main50};
  font-size: 2rem;
  font-weight: 700;
`;
