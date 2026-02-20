import { create } from "zustand";

interface FsdState {
  items: FSD.FSDItem[];
  setItems: (items: FSD.FSDItem[]) => void;
  addItem: (item: FSD.FSDItem) => void;
}

export const useFsdStore = create<FsdState>((set) => ({
  items: [],
  setItems: (items) => set({ items }),
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
}));
