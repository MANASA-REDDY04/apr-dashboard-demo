// src/app/dashboard/components/filters/DateRangeFilter.tsx
"use client";

import { useDashboardFilters } from "../../../../hooks/useDashboardFilters";

export function DateRangeFilter() {
  const { dateRange, setDateRange } = useDashboardFilters();

  return (
    <div className="flex items-center gap-2">
      <input
        type="date"
        value={dateRange.from ?? ""}
        onChange={(e) =>
          setDateRange({ ...dateRange, from: e.target.value })
        }
        className="rounded-md border px-2 py-1 text-sm"
      />

      <span className="text-sm text-neutral-500">to</span>

      <input
        type="date"
        value={dateRange.to ?? ""}
        onChange={(e) =>
          setDateRange({ ...dateRange, to: e.target.value })
        }
        className="rounded-md border px-2 py-1 text-sm"
      />
    </div>
  );
}
