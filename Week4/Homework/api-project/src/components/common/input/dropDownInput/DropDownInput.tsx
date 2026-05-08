import type { SelectHTMLAttributes } from "react";
import * as S from "./DropDownInput.styles";

interface DropDownInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
}

const DropDownInput = ({
  label,
  options,
  ...InputProps
}: DropDownInputProps) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Select {...InputProps}>
        <option value="">선택해주세요.</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </S.Select>
    </S.Container>
  );
};

export default DropDownInput;
