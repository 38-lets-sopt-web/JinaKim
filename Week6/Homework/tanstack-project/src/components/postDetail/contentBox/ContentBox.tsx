import type { ReactNode } from "react";
import * as S from "./ContentBox.styles";

interface ContentBoxProps {
  title?: string;
  children: ReactNode;
}

const ContentBox = ({ title, children }: ContentBoxProps) => {
  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}
      {children}
    </S.Container>
  );
};

export default ContentBox;
