import { useDashboardStore } from "../store/dashboard.store";

export function useDashboardFilters() {
  const dateRange = useDashboardStore((s) => s.dateRange);
  const channels = useDashboardStore((s) => s.channels);

  const setDateRange = useDashboardStore((s) => s.setDateRange);
  const setChannels = useDashboardStore((s) => s.setChannels);
  const resetFilters = useDashboardStore((s) => s.resetFilters);

  return {
    dateRange,
    channels,
    setDateRange,
    setChannels,
    resetFilters,
  };
}
