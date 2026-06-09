import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Container = styled.section`
  overflow: hidden;
  background-color: ${theme.colors.white};
  border-radius: ${theme.radius.lg};
`;

export const MainImg = styled.img`
  display: block;
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  gap: 25px;
  padding: 25px;
`;

export const PosterImg = styled.img`
  display: block;
  width: 230px;
  height: 350px;
  border-radius: ${theme.radius.md};
  object-fit: cover;
`;

export const TextInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
  min-width: 0;
`;

export const Date = styled.p`
  color: ${theme.colors.textMuted};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.bold};
`;

export const Title = styled.h1`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
`;

export const Tag = styled.li`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.lg};
  padding: 6px 12px;
  color: ${theme.colors.textSecondary};
  background-color: ${theme.colors.surfaceMuted};
  font-size: ${theme.fontSizes.sm};
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
`;

export const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.md};
  padding: 16px;
`;

export const ItemTitle = styled.p`
  color: ${theme.colors.textMuted};
  font-size: ${theme.fontSizes.sm};
`;

export const ItemInfo = styled.p`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.bold};
`;
