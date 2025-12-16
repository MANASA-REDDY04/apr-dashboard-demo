import { create } from "zustand";

type UserPreferences = {
  timezone: string;
  currency: string;
  setTimezone: (tz: string) => void;
  setCurrency: (currency: string) => void;
};

export const useUserStore = create<UserPreferences>((set) => ({
  timezone: "UTC",
  currency: "USD",

  setTimezone: (timezone) => set({ timezone }),
  setCurrency: (currency) => set({ currency }),
}));