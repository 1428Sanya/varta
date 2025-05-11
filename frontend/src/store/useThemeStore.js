import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Varta-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("Varta-theme", theme);
    set({ theme });
  },
}));
