import { create } from "zustand";

export const useIndex = create((set) => ({
  index: -1,
  setIndex: (index: number) => set({ index }),
  resetIndex: () => set({ index: -1 }),
}));
