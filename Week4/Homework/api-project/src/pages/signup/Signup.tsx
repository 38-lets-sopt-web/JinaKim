import { Link } from "react-router";
import AuthFormLayout from "../../components/auth/authFormLayout/AuthFormLayout";
import SignupID from "./components/SignupID";
import { useState } from "react";
import SignupPassword from "./components/SignupPassword";
import SignupInfo from "./components/SignupInfo";
import type {
  SignupFormData,
  SignupIDFormData,
  SignupInfoFormData,
  SignupPasswordFormData,
} from "../../schemas/signupSchema";
import { postUser } from "../../apis/user";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [signupData, setSignupData] = useState<Partial<SignupFormData>>({});

  const handleNextIdStep = (data: SignupIDFormData) => {
    setSignupData((prev) => ({
      ...prev,
      ...data,
    }));

    setStep(2);
  };

  const handleNextPasswordStep = (data: SignupPasswordFormData) => {
    setSignupData((prev) => ({
      ...prev,
      ...data,
    }));

    setStep(3);
  };

  const handleSignupSubmit = async (data: SignupInfoFormData) => {
    const finalSignupData = {
      ...signupData,
      ...data,
    };

    if (!finalSignupData.id || !finalSignupData.password) {
      alert("회원가입을 처음부터 다시 진행해주세요.");
      return;
    }

    const requestBody = {
      loginId: finalSignupData.id,
      password: finalSignupData.password,
      name: finalSignupData.name,
      email: finalSignupData.email,
      age: finalSignupData.age,
      part: finalSignupData.part,
    };

    await postUser(requestBody);
  };

  return (
    <AuthFormLayout
      title="회원가입"
      bottomContent={
        <>
          이미 계정이 있나요? <Link to="/login">로그인</Link>
        </>
      }
    >
      {step === 1 && <SignupID onNext={handleNextIdStep} />}
      {step === 2 && <SignupPassword onNext={handleNextPasswordStep} />}
      {step === 3 && <SignupInfo onSubmitSignup={handleSignupSubmit} />}
    </AuthFormLayout>
  );
};

export default Signup;
