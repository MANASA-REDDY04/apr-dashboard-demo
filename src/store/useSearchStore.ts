import { create } from "zustand";

type SearchState = {
  searchQuery: string;
  isSearching: boolean;
  suggestions: string[];
  
  // Applied State (Drives Charts/Data)
  appliedDateRange: string;
  appliedChannel: string;

  // Pending State (Drives UI inputs before Apply)
  pendingDateRange: string;
  pendingChannel: string;

  setSearchQuery: (query: string) => void;
  setIsSearching: (isSearching: boolean) => void;
  setSuggestions: (suggestions: string[]) => void;
  
  // Pending Setters
  setPendingDateRange: (range: string) => void;
  setPendingChannel: (channel: string) => void;

  // Actions
  applyFilters: () => void;
  resetFilters: () => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  searchQuery: "",
  isSearching: false,
  suggestions: [],

  // Initial Defaults
  appliedDateRange: "7d",
  appliedChannel: "All",
  
  pendingDateRange: "7d",
  pendingChannel: "All",

  setSearchQuery: (query) => set({ searchQuery: query }),
  setIsSearching: (isSearching) => set({ isSearching }),
  setSuggestions: (suggestions) => set({ suggestions }),

  setPendingDateRange: (range) => set({ pendingDateRange: range }),
  setPendingChannel: (channel) => set({ pendingChannel: channel }),

  applyFilters: () => set((state) => ({
    appliedDateRange: state.pendingDateRange,
    appliedChannel: state.pendingChannel,
  })),

  resetFilters: () => set({
    pendingDateRange: "7d",
    pendingChannel: "All",
    appliedDateRange: "7d",
    appliedChannel: "All",
    searchQuery: "",
  }),
}));
