import { create } from "zustand";

type DateRange = {
  from: string | null;
  to: string | null;
};

type DashboardState = {
  dateRange: DateRange;
  channels: string[];

  setDateRange: (range: DateRange) => void;
  setChannels: (channels: string[]) => void;
  resetFilters: () => void;
};

const initialState: Pick<DashboardState, "dateRange" | "channels"> = {
  dateRange: { from: null, to: null },
  channels: [],
};

export const useDashboardStore = create<DashboardState>((set) => ({
  ...initialState,

  setDateRange: (dateRange) => set({ dateRange }),

  setChannels: (channels) => set({ channels }),

  resetFilters: () => set(initialState),
}));