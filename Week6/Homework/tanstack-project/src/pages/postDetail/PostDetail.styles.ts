import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { Link } from "react-router";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BackLink = styled(Link)`
  width: fit-content;
  color: ${theme.colors.textPrimary};
  font-weight: ${theme.fontWeights.medium};
`;

export const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
`;
