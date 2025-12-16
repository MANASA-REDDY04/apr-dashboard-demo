// src/app/dashboard/components/kpi/KpiCard.tsx
"use client";

import { Card } from "../../../../components/ui/Card";
import { Tooltip } from "../../../../components/ui/Tooltip";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";
import clsx from "clsx";

type KpiCardProps = {
  label: string;
  value: number | string;
  changePct: number;
  icon?: React.ReactNode;
};

export function KpiCard({
  label,
  value,
  changePct,
  icon,
}: KpiCardProps) {
  const isPositive = changePct >= 0;

  return (
    <Card className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm text-neutral-500">{label}</p>

        <div className="mt-1 flex items-center gap-2">
          <p className="text-2xl font-semibold">{value}</p>

          <Tooltip content="Compared to previous period">
            <span
              className={clsx(
                "flex items-center text-sm font-medium",
                isPositive ? "text-green-600" : "text-red-600"
              )}
            >
              {isPositive ? (
                <IconArrowUpRight size={16} />
              ) : (
                <IconArrowDownRight size={16} />
              )}
              {Math.abs(changePct)}%
            </span>
          </Tooltip>
        </div>
      </div>

      {icon && <div className="text-neutral-700">{icon}</div>}
    </Card>
  );
}
