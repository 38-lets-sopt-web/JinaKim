import styled from "@emotion/styled";

export const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 50%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const ResultTitle = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
