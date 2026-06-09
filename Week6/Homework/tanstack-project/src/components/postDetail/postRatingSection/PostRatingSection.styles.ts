import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
`;

export const Input = styled.input`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  padding: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const SubmitButton = styled.button`
  border-radius: ${theme.radius.sm};
  background-color: ${theme.colors.buttonPrimary};
  color: ${theme.colors.white};
  padding: 8px 12px;
`;

export const DeleteButton = styled.button`
  border-radius: ${theme.radius.sm};
  background-color: ${theme.colors.surfaceMuted};
  color: ${theme.colors.textSecondary};
  padding: 8px 12px;
`;
