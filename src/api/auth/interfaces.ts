import { UseMutateFunction } from "react-query";

export interface User {
  id: string;
  email: string;
  name: string;
  lastName: string;
  bio: string;
  image: string;
  birthday: string;
  createdAt: Date;
  updatedAt: Date;
  roleName: string;
}

export interface RegistrationStatus {
  success: boolean;
  message: string;
  data: Omit<User, "lastName" | "bio" | "image" | "birthday" | "password">;
}

export interface LoginStatus extends Omit<RegistrationStatus, "data"> {
  data: {
    refresh_token: string;
    access_token: string;
  };
}

export interface RefreshStatus {
  success: boolean;
  message: string;
  data: {
    refresh_token: string;
    access_token: string;
  };
}

export type UserLoginCredentials = Record<
  "user",
  { email: string; password: string }
>;

export type IUseSignIn = UseMutateFunction<
  LoginStatus,
  unknown,
  {
    email: string;
    password: string;
  },
  unknown
>;
