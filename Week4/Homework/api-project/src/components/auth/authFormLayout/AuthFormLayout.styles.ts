import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 50%;
  height: 100vh;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const BottomText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
