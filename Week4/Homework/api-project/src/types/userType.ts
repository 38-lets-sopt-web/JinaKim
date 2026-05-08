export interface SignupRequestData {
  loginId: string;
  password: string;
  name: string;
  email: string;
  age: number;
  part: string;
}

export interface LoginRequestData {
  loginId: string;
  password: string;
}

export interface EditInfoRequestData {
  name: string;
  email: string;
  age: number;
}

export interface UserInfo {
  age: number;
  email: string;
  id: number;
  loginId: string;
  name: string;
  part: string;
}

export interface UserItem {
  id: number;
  name: string;
  part: string;
}
