import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
  margin: 0 auto;
`;

export const SectionTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;
