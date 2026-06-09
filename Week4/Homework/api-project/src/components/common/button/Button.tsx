import type { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, type = "button", ...props }: ButtonProps) => {
  return (
    <S.Container type={type} {...props}>
      {children}
    </S.Container>
  );
};

export default Button;
