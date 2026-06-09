import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
`;
