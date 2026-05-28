import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FilterBar = styled.div`
  background-color: white;
  border: 2px solid ${theme.colors.borderLight};
  border-radius: ${theme.radius.md};
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const RatingSelect = styled.select`
  width: 120px;
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  padding: 8px 10px;
  color: ${theme.colors.textSecondary};
  font-weight: ${theme.fontWeights.medium};
`;
