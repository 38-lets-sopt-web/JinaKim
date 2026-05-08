import { useForm } from "react-hook-form";
import Button from "../../../components/common/button/Button";
import InputField from "../../../components/common/input/inputField/InputField";
import { ErrorMessage } from "../../../components/auth/authFormLayout/AuthFormLayout.styles";
import {
  signupPasswordSchema,
  type SignupPasswordFormData,
} from "../../../schemas/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../../components/auth/authFormLayout/AuthFormLayout.styles";

interface SignupPasswordProps {
  onNext: (data: SignupPasswordFormData) => void;
}

const SignupPassword = ({ onNext }: SignupPasswordProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupPasswordFormData>({
    resolver: zodResolver(signupPasswordSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignupPasswordFormData) => {
    onNext(data);
  };

  const errorMessage =
    errors.password?.message || errors.confirmPassword?.message;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        type="password"
        {...register("password")}
      />
      <InputField
        label="비밀번호 확인"
        placeholder="비밀번호를 다시 입력해주세요."
        type="password"
        {...register("confirmPassword")}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button type="submit" disabled={!isValid}>
        다음
      </Button>
    </Form>
  );
};

export default SignupPassword;
