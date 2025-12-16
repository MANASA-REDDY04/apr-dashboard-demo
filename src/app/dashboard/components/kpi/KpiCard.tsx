"use client";

import { Card } from "../../../../components/ui/Card";
import { Tooltip } from "../../../../components/ui/Tooltip";
import {
  IconArrowUpRight,
  IconArrowDownRight,
} from "@tabler/icons-react";
import clsx from "clsx";
import { ReactNode } from "react";

export type KpiVariant =
  | "indigo"
  | "blue"
  | "sky"
  | "emerald"
  | "mint"
  | "violet"
  | "pink"
  | "rose"
  | "peach"
  | "default";

type KpiCardProps = {
  label: string;
  value: number | string;
  changePct: number;
  icon?: ReactNode;
  variant?: KpiVariant;
};

export function KpiCard({
  label,
  value,
  changePct,
  icon,
  variant = "default",
}: KpiCardProps) {
  const isPositive = changePct >= 0;

  const gradientClass = {
    indigo: "bg-gradient-indigo",
    blue: "bg-gradient-blue",
    sky: "bg-gradient-sky",
    emerald: "bg-gradient-emerald",
    mint: "bg-gradient-mint",
    violet: "bg-gradient-violet",
    pink: "bg-gradient-pink",
    rose: "bg-gradient-rose",
    peach: "bg-gradient-peach",
    default: "bg-white border",
  }[variant];

  return (
    <Card
      className={clsx(
        "relative overflow-hidden rounded-2xl transition-all",
        "hover:shadow-md hover:-translate-y-0.5",
        gradientClass
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600">
            {label}
          </p>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            {value}
          </h3>
        </div>

        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow-sm ring-1 ring-black/5">
            {icon}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center gap-2">
        <Tooltip content="Compared to previous period">
          <div
            className={clsx(
              "flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
              isPositive
                ? "bg-emerald-50 text-emerald-700"
                : "bg-rose-50 text-rose-700"
            )}
          >
            {isPositive ? (
              <IconArrowUpRight size={14} />
            ) : (
              <IconArrowDownRight size={14} />
            )}
            <span>{Math.abs(changePct)}%</span>
          </div>
        </Tooltip>

        <span className="text-xs text-slate-500">
          vs last period
        </span>
      </div>
    </Card>
  );
}
