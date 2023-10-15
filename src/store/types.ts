import { useStore } from "zustand";
import { authStore } from "./auth-store";
import { useStoreWithEqualityFn } from "zustand/traditional";

export type ExtractState<S> = S extends {
  getState: () => infer T;
}
  ? T
  : never;

type Params<U> = Parameters<typeof useStore<typeof authStore, U>>;

// Selectors
const accessTokenSelector = (state: ExtractState<typeof authStore>) =>
  state.access_token;
const refreshTokenSelector = (state: ExtractState<typeof authStore>) =>
  state.refresh_token;
const dataUserSelector = (state: ExtractState<typeof authStore>) =>
  state.data_user;
const actionsSelector = (state: ExtractState<typeof authStore>) =>
  state.actions;

// getters
export const getAccessToken = () => accessTokenSelector(authStore.getState());
export const getRefreshToken = () => refreshTokenSelector(authStore.getState());
export const getDataUser = () => dataUserSelector(authStore.getState());
export const getActions = () => actionsSelector(authStore.getState());

function useAuthStore<U>(selector: Params<U>[1], equalityFn?: Params<U>[2]) {
  return useStoreWithEqualityFn(authStore, selector, equalityFn);
}

// Hooks
export const useAccessToken = () => useAuthStore(accessTokenSelector);
export const useRefreshToken = () => useAuthStore(refreshTokenSelector);
export const useDataUser = () => useAuthStore(dataUserSelector);
export const useActions = () => useAuthStore(actionsSelector);
