import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 50%;
  margin: 150px auto;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const GoBackBtn = styled.button`
  width: fit-content;
  color: ${({ theme }) => theme.colors.textSub};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
