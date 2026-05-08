import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
`;

export const InfoContent = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSub};
`;
