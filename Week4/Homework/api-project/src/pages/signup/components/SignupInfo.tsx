import { useForm } from "react-hook-form";
import Button from "../../../components/common/button/Button";
import InputField from "../../../components/common/input/inputField/InputField";
import {
  signupInfoSchema,
  type SignupInfoFormData,
} from "../../../schemas/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import DropDownInput from "../../../components/common/input/dropDownInput/DropDownInput";
import { Form } from "../../../components/auth/authFormLayout/AuthFormLayout.styles";
import { ErrorMessage } from "./../../../components/auth/authFormLayout/AuthFormLayout.styles";

const partList = ["웹", "iOS", "안드로이드"];

interface SignupInfoProps {
  onSubmitSignup: (data: SignupInfoFormData) => void;
}

const SignupInfo = ({ onSubmitSignup }: SignupInfoProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupInfoFormData>({
    resolver: zodResolver(signupInfoSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      part: "",
    },
  });

  const onSubmit = (data: SignupInfoFormData) => {
    onSubmitSignup(data);
  };

  const errorMessage =
    errors.name?.message ||
    errors.email?.message ||
    errors.age?.message ||
    errors.part?.message;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="이름"
        placeholder="이름을 입력해주세요."
        {...register("name")}
      />
      <InputField
        label="이메일"
        placeholder="이메일을 입력해주세요."
        {...register("email")}
      />
      <InputField
        label="나이"
        placeholder="나이를 입력해주세요."
        {...register("age", { valueAsNumber: true })}
      />
      <DropDownInput label="파트" options={partList} {...register("part")} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button type="submit" disabled={!isValid}>
        회원가입
      </Button>
    </Form>
  );
};

export default SignupInfo;
