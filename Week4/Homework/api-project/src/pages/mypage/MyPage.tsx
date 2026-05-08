import { useEffect } from "react";
import AuthFormLayout from "../../components/auth/authFormLayout/AuthFormLayout";
import {
  ErrorMessage,
  Form,
} from "../../components/auth/authFormLayout/AuthFormLayout.styles";
import Button from "../../components/common/button/Button";
import InputField from "../../components/common/input/inputField/InputField";
import InfoCard from "../../components/mypage/InfoCard/InfoCard";
import { patchMyInfo } from "../../apis/user";
import { type EditInfoRequestData, type UserInfo } from "../../types/userType";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  editInfoSchema,
  type EditInfoFormData,
} from "../../schemas/editInfoSchema";
import { useOutletContext } from "react-router";

const MyPage = () => {
  const userInfo = useOutletContext<UserInfo>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<EditInfoFormData>({
    resolver: zodResolver(editInfoSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      age: 0,
    },
  });

  useEffect(() => {
    reset({
      name: userInfo.name,
      email: userInfo.email,
      age: userInfo.age,
    });
  }, [userInfo, reset]);

  const onSubmit = async (data: EditInfoRequestData) => {
    const res = await patchMyInfo(userInfo.id, data);
    if (res) {
      alert("정보 저장에 성공하셨습니다.");
    }
  };

  const errorMessage =
    errors.name?.message || errors.email?.message || errors.age?.message;

  return (
    <AuthFormLayout title="내 정보">
      <InfoCard
        items={[
          { label: "아이디", value: userInfo.loginId },
          { label: "파트", value: userInfo.part },
        ]}
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputField label="이름" {...register("name")} />

        <InputField label="이메일" {...register("email")} />

        <InputField
          label="나이"
          type="number"
          {...register("age", { valueAsNumber: true })}
        />

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit" disabled={!isValid}>
          정보 수정
        </Button>
      </Form>
    </AuthFormLayout>
  );
};

export default MyPage;
