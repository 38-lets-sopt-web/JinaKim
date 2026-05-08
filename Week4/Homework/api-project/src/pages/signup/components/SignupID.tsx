import { useForm } from "react-hook-form";
import Button from "../../../components/common/button/Button";
import InputField from "../../../components/common/input/inputField/InputField";
import { ErrorMessage } from "../../../components/auth/authFormLayout/AuthFormLayout.styles";
import {
  signupIDSchema,
  type SignupIDFormData,
} from "../../../schemas/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../../components/auth/authFormLayout/AuthFormLayout.styles";

interface SignupIDProps {
  onNext: (data: SignupIDFormData) => void;
}

const SignupID = ({ onNext }: SignupIDProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupIDFormData>({
    resolver: zodResolver(signupIDSchema),
    mode: "onChange",
    defaultValues: {
      id: "",
    },
  });

  const onSubmit = (data: SignupIDFormData) => {
    onNext(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="아이디"
        placeholder="아이디를 입력해주세요."
        {...register("id")}
      />
      {errors.id && <ErrorMessage>{errors.id.message}</ErrorMessage>}
      <Button type="submit" disabled={!isValid}>
        다음
      </Button>
    </Form>
  );
};

export default SignupID;
