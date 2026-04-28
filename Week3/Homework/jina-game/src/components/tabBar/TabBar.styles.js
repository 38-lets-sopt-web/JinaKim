import styled from "@emotion/styled";
import Colors from "../../styles/Colors";

export const Container = styled.nav`
  display: flex;
  gap: 10px;
`;

export const TabItem = styled.button`
  padding: 5px 15px;
  border: 1px solid ${Colors.Main40};
  border-radius: 15px;
  color: ${({ $isSelected }) => ($isSelected ? Colors.Main10 : Colors.Main40)};
  background-color: ${({ $isSelected }) =>
    $isSelected ? Colors.Main40 : "transparent"};
`;
