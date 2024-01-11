import Cookies from "js-cookie";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../consts";

import { createStore } from "zustand";
import { devtools } from "zustand/middleware";

export interface State {
  access_token: string | undefined;
  refresh_token: string | undefined;
  actions: Actions;
}

export interface Actions {
  setAccessToken: (access_token: string | undefined) => void;
  setRefreshToken: (refresh_token: string | undefined) => void;
  clearTokens: () => void;
}

export const authStore = createStore<State>()(
  devtools((set) => ({
    access_token: Cookies.get(ACCESS_TOKEN),
    refresh_token: Cookies.get(REFRESH_TOKEN),
    actions: {
      setAccessToken: (access_token: string | undefined) => {
        set({ access_token });
      },
      setRefreshToken: (refresh_token: string | undefined) => {
        set({ refresh_token });
      },

      clearTokens: () => {
        set({ access_token: undefined, refresh_token: undefined });
        Cookies.remove(REFRESH_TOKEN);
        Cookies.remove(ACCESS_TOKEN);
      },
    },
  }))
);
