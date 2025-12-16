import { useQuery } from "@tanstack/react-query";
import { getDashboardOverview } from "../services/dashboard.service";
import { useDashboardFilters } from "./useDashboardFilters";
import { useQueryError } from "./useQueryError";

export function useDashboardQuery() {
  const { dateRange, channels } = useDashboardFilters();

  const query = useQuery({
    queryKey: ["dashboard-overview", dateRange, channels],
    queryFn: () =>
      getDashboardOverview({
        from: dateRange.from ?? undefined,
        to: dateRange.to ?? undefined,
        channels,
      }),
  });

  useQueryError(query.error);

  return query;
}
