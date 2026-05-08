import type { InputHTMLAttributes } from "react";
import * as S from "./InputField.styles";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField = ({
  label,
  type = "text",
  ...inputProps
}: InputFieldProps) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input type={type} {...inputProps} />
    </S.Container>
  );
};

export default InputField;
