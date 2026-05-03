import styled from "@emotion/styled";
import Colors from "../../styles/Colors";

export const Container = styled.header`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px;
  background-color: ${Colors.Main30};
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;
