import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  min-width: 100px;
  padding: 10px 0;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
`;

export const Part = styled.p`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1;
`;
