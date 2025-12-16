// src/app/dashboard/components/filters/FilterBar.tsx
"use client";

import { DateRangeFilter } from "./DateRangeFilter";
import { ChannelFilter } from "./ChannelFilter";
import { Button } from "../../../../components/ui/Button";
import { useDashboardFilters } from "../../../../hooks/useDashboardFilters";

export function FilterBar() {
  const { resetFilters } = useDashboardFilters();

  return (
    <div className="mb-6 flex flex-wrap items-center gap-4">
      <DateRangeFilter />
      <ChannelFilter />

      <Button variant="secondary" onClick={resetFilters}>
        Reset
      </Button>
    </div>
  );
}
