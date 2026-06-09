import styled from "@emotion/styled";

export const Container = styled.button`
  width: 100%;
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: ${({ theme }) => theme.radius.sm};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.buttonDisabled};
    cursor: default;
  }
`;
