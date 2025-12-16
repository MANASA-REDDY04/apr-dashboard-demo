// src/app/dashboard/components/kpi/KpiGrid.tsx
"use client";

import { KpiCard } from "./KpiCard";
import { useDashboardQuery } from "../../../../hooks/useDashboardQuery";
import { IconUsers, IconChartBar, IconCash } from "@tabler/icons-react";

export function KpiGrid() {
  const { data, isLoading } = useDashboardQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-24 animate-pulse rounded-xl bg-neutral-100"
          />
        ))}
      </div>
    );
  }

  if (!data) return null;

  const iconMap: Record<string, React.ReactNode> = {
    Sessions: <IconChartBar size={28} />,
    Users: <IconUsers size={28} />,
    Revenue: <IconCash size={28} />,
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {data.kpis.map((kpi) => (
        <KpiCard
          key={kpi.id}
          label={kpi.label}
          value={kpi.value}
          changePct={kpi.changePct}
          icon={iconMap[kpi.label]}
        />
      ))}
    </div>
  );
}
