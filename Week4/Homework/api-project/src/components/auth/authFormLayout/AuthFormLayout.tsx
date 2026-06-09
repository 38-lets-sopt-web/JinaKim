import type { ReactNode } from "react";
import * as S from "./AuthFormLayout.styles";

interface AuthFormLayoutProps {
  title: string;
  children: ReactNode;
  bottomContent?: ReactNode;
}

const AuthFormLayout = ({
  title,
  children,
  bottomContent,
}: AuthFormLayoutProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.FormContent>{children}</S.FormContent>
      {bottomContent && <S.BottomText>{bottomContent}</S.BottomText>}
    </S.Container>
  );
};

export default AuthFormLayout;
