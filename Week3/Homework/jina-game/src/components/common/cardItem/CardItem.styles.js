import styled from "@emotion/styled";
import Colors from "../../../styles/Colors";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${Colors.Main30};
  border-radius: 10px;
`;

export const Title = styled.p`
  font-size: 1rem;
`;

export const Content = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;
