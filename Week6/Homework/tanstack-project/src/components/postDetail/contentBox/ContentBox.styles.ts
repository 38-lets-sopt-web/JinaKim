import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  border-radius: ${theme.radius.lg};
  padding: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 14px;
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.bold};
`;
