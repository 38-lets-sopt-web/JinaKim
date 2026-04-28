import * as S from "./Button.styles";

const Button = ({ children, type = "button", ...props }) => {
  return (
    <S.Container type={type} {...props}>
      {children}
    </S.Container>
  );
};

export default Button;
