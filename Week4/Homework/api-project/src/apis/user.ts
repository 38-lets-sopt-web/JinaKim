import axios from "axios";
import api from "./instance";
import type {
  EditInfoRequestData,
  LoginRequestData,
  SignupRequestData,
} from "../types/userType";

/**
 * 회원가입
 * @param data - 회원가입 요청 데이터
 * @returns
 */
export const postUser = async (data: SignupRequestData) => {
  try {
    const res = await api.post("/api/v1/auth/signup", data);

    if (res.data.success) {
      return res.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      alert(error.response.data.message); // 서버 메시지 직접 사용자에게 표시
    } else {
      alert("회원가입 중 오류가 발생했습니다.");
    }
  }
};

/**
 * 로그인
 * @param data - 로그인 요청 데이터
 * @returns
 */
export const login = async (data: LoginRequestData) => {
  try {
    const res = await api.post("/api/v1/auth/signin", data);
    if (res.data.success) {
      return res.data.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      alert(error.response.data.message);
    } else {
      alert("로그인 중 오류가 발생했습니다.");
    }
  }
};

/**
 * 내 정보 조회
 * @param userId - 유저 아이디
 * @returns
 */
export const getMyInfo = async (userId: number) => {
  try {
    const res = await api.get(`/api/v1/users/${userId}`);
    if (res.data.success) {
      return res.data.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      alert(error.response.data.message);
    } else {
      alert("정보 조회 중 오류가 발생했습니다.");
    }
  }
};

/**
 * 내 정보 수정
 * @param userId - 유저 아이디
 * @returns
 */
export const patchMyInfo = async (
  userId: number,
  data: EditInfoRequestData,
) => {
  try {
    const res = await api.patch(`/api/v1/users/${userId}`, data);
    if (res.data.success) {
      return res.data.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      alert(error.response.data.message);
    } else {
      alert("정보 수정에 오류가 발생했습니다.");
    }
  }
};

/**
 * 회원 목록 조회
 * @returns
 */
export const getUsers = async () => {
  try {
    const res = await api.get("/api/v1/users");
    if (res.data.success) {
      return res.data.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      alert(error.response.data.message);
    } else {
      alert("목록 조회 중 오류가 발생했습니다.");
    }
  }
};
