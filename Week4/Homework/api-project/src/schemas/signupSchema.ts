import z from "zod";

export const signupIDSchema = z.object({
  id: z
    .string()
    .trim()
    .min(1, "아이디를 입력해주세요.")
    .max(20, "아이디는 20자를 넘을 수 없습니다."),
});

export const signupPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "비밀번호를 8자 이상 입력해주세요.")
      .max(20, "비밀번호를 20자 이하로 입력해주세요.")
      .regex(/^\S*$/, "비밀번호에는 공백을 사용할 수 없습니다.")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^*+=-])[A-Za-z\d!@#$%^*+=-]{8,20}$/,
        "비밀번호는 영문자, 숫자, 특수문자를 포함해야 합니다.",
      ),
    confirmPassword: z.string().min(1, "비밀번호 확인을 진행해주세요."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export const signupInfoSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "이름을 입력해주세요.")
    .max(10, "이름을 바르게 입력해주세요."),
  email: z
    .string()
    .trim()
    .min(1, "이메일을 입력해주세요.")
    .pipe(z.email("올바른 이메일 형식이 아닙니다.")),
  age: z
    .number("나이는 숫자로 입력해주세요.")
    .int("올바른 나이를 입력해주세요."),
  part: z.string().min(1, "파트를 선택해주세요."),
});

export type SignupIDFormData = z.infer<typeof signupIDSchema>;
export type SignupPasswordFormData = z.infer<typeof signupPasswordSchema>;
export type SignupInfoFormData = z.infer<typeof signupInfoSchema>;

export type SignupFormData = SignupIDFormData &
  SignupPasswordFormData &
  SignupInfoFormData;
