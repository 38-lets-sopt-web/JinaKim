import { useEffect, useState } from "react";
import AuthFormLayout from "../../components/auth/authFormLayout/AuthFormLayout";
import {
  ErrorMessage,
  Form,
} from "../../components/auth/authFormLayout/AuthFormLayout.styles";
import Button from "../../components/common/button/Button";
import InputField from "../../components/common/input/inputField/InputField";
import InfoCard from "../../components/mypage/InfoCard/InfoCard";
import { getMyInfo, patchMyInfo } from "../../apis/user";
import { type EditInfoRequestData, type UserInfo } from "../../types/userType";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  editInfoSchema,
  type EditInfoFormData,
} from "../../schemas/editInfoSchema";

const MyPage = () => {
  const storedUserId = localStorage.getItem("userId");
  const userId = storedUserId ? Number(storedUserId) : null;

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

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
    if (!userId) return;

    const fetchData = async () => {
      const data = await getMyInfo(userId);

      setUserInfo(data);

      reset({
        name: data.name,
        email: data.email,
        age: data.age,
      });
    };

    fetchData();
  }, [userId, reset]);

  if (!userInfo) return null;

  const onSubmit = async (data: EditInfoRequestData) => {
    if (!userId) return;

    const res = await patchMyInfo(userId, data);
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
