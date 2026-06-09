import { useState, type InputHTMLAttributes } from "react";
import * as S from "./InputField.styles";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField = ({
  label,
  type = "text",
  ...inputProps
}: InputFieldProps) => {
  const [isVisible, setVisible] = useState(false);
  const isPassword = type === "password";

  const inputType = isPassword ? (isVisible ? "text" : "password") : type;

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputWrapper>
        <S.Input type={inputType} {...inputProps} />
        {isPassword && (
          <button type="button" onClick={() => setVisible((prev) => !prev)}>
            {isVisible ? "🙈" : "👁️"}
          </button>
        )}
      </S.InputWrapper>
    </S.Container>
  );
};

export default InputField;
