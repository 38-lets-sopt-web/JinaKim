import { Link, useNavigate } from "react-router";
import AuthFormLayout from "../../components/auth/authFormLayout/AuthFormLayout";
import InputField from "../../components/common/input/inputField/InputField";
import Button from "../../components/common/button/Button";
import { useForm } from "react-hook-form";
import { type LoginFormData, loginSchema } from "../../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ErrorMessage,
  Form,
} from "../../components/auth/authFormLayout/AuthFormLayout.styles";
import { login } from "../../apis/user";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    if (!data) return;

    const requestBody = {
      loginId: data.id,
      password: data.password,
    };

    const res = await login(requestBody);

    if (!res) return;

    localStorage.setItem("userId", res.userId);

    navigate("/mypage");
  };

  const errorMessage = errors.id?.message || errors.password?.message;

  return (
    <AuthFormLayout
      title="SOPT MEMBERS"
      bottomContent={<Link to="/signup">회원가입</Link>}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="아이디"
          placeholder="아이디를 입력해주세요."
          {...register("id")}
        />
        <InputField
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          type="password"
          {...register("password")}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit" disabled={!isValid}>
          로그인
        </Button>
      </Form>
    </AuthFormLayout>
  );
};

export default Login;
