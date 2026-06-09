import styled from "@emotion/styled";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TitleAndGreet = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const Greet = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
