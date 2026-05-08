import z from "zod";

export const editInfoSchema = z.object({
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
});

export type EditInfoFormData = z.infer<typeof editInfoSchema>;
