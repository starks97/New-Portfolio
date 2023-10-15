import Cookies from "js-cookie";
import { AUTH_TOKEN, REFRESH_TOKEN } from "../../consts";
import { LoginStatus } from "@/api/auth/interfaces";

import { createStore } from "zustand";
import { devtools } from "zustand/middleware";
export interface State {
  access_token: string | undefined;
  refresh_token: string | undefined;
  data_user: LoginStatus["data"]["rest"] | undefined;
  actions: Actions;
}

export interface Actions {
  setAccessToken: (access_token: string | undefined) => void;
  setRefreshToken: (refresh_token: string | undefined) => void;
  setDataUser: (data_user: LoginStatus["data"]["rest"] | undefined) => void;
  clearTokens: () => void;
}

const authCookie = Cookies.get(AUTH_TOKEN);
const refreshToken = Cookies.get(REFRESH_TOKEN);

export const authStore = createStore<State>()(
  devtools((set, get) => ({
    access_token: authCookie,
    refresh_token: refreshToken,
    data_user: undefined,
    loading: false,
    actions: {
      setAccessToken: (access_token: string | undefined) => {
        set({ access_token });
      },
      setRefreshToken: (refresh_token: string | undefined) => {
        set({ refresh_token });
      },
      setDataUser: (data_user: LoginStatus["data"]["rest"] | undefined) => {
        set({ data_user });
      },
      clearTokens: () => {
        set({ access_token: undefined, refresh_token: undefined });
        Cookies.remove(REFRESH_TOKEN);
        Cookies.remove(AUTH_TOKEN);
      },
    },
  }))
);
