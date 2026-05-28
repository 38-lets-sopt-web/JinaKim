import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { Link } from "react-router";

export const Container = styled.article`
  overflow: hidden;
  background-color: ${theme.colors.white};
  border-radius: ${theme.radius.md};
  width: 100%;
  height: 400px;
`;

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ImgContainer = styled.img`
  display: block;
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes.md};
`;

export const Date = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
`;

export const Summary = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
`;
