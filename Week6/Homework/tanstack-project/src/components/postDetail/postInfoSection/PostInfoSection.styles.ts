import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const List = styled.dl`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  padding: 8px 0;
  border-bottom: 1px solid ${theme.colors.borderLight};
`;

export const Label = styled.dt`
  color: ${theme.colors.textMuted};
  font-size: ${theme.fontSizes.sm};
`;

export const Value = styled.dd`
  margin: 0;
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.sm};
`;
