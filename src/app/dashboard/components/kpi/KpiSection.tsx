"use client";

import { KpiCard, KpiVariant } from "./KpiCard";
import {
  IconCash,
  IconShoppingCart,
  IconChartBar,
  IconReceipt2,
  IconClick,
  IconTargetArrow,
  IconUsers,
} from "@tabler/icons-react";
import { useDashboardStats } from "../../../../hooks/useDashboardStats";
import { KpiMetric } from "../../../../types/dashboard";

export function KpiSection() {
  const { data, isLoading } = useDashboardStats();

  if (isLoading || !data) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-32 animate-pulse rounded-2xl bg-slate-100"
          />
        ))}
      </div>
    );
  }

  const revenue =
    data.kpis.find((k: KpiMetric) => k.id === "revenue")?.value ?? 0;
  const sessions =
    data.kpis.find((k: KpiMetric) => k.id === "sessions")?.value ?? 0;
  const conversions =
    data.kpis.find((k: KpiMetric) => k.id === "conversions")?.value ?? 0;

  const orders = conversions;
  const aov = orders ? (revenue as number) / (orders as number) : 0;
  const conversionRate = sessions
    ? ((orders as number) / (sessions as number)) * 100
    : 0;

  const adSpend = 45000;
  const adRevenue = 145000;
  const roas = adSpend ? adRevenue / adSpend : 0;

  return (
    <div className="space-y-10">
      {/* Revenue Health */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-slate-800">
          Revenue Health
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            label="Total Revenue"
            value={`$${revenue.toLocaleString()}`}
            changePct={12.5}
            icon={<IconCash size={22} />}
            variant="indigo"
          />
          <KpiCard
            label="Total Orders"
            value={orders.toLocaleString()}
            changePct={8.2}
            icon={<IconShoppingCart size={22} />}
            variant="violet"
          />
          <KpiCard
            label="Avg. Order Value"
            value={`$${aov.toFixed(2)}`}
            changePct={4.1}
            icon={<IconReceipt2 size={22} />}
            variant="sky"
          />
          <KpiCard
            label="Conversion Rate"
            value={`${conversionRate.toFixed(2)}%`}
            changePct={-1.2}
            icon={<IconTargetArrow size={22} />}
            variant="pink"
          />
        </div>
      </section>

      {/* Marketing Efficiency */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-slate-800">
          Marketing Efficiency
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            label="Ad Spend"
            value={`$${adSpend.toLocaleString()}`}
            changePct={5.4}
            icon={<IconCash size={22} />}
            variant="peach"
          />
          <KpiCard
            label="ROAS"
            value={`${roas.toFixed(2)}x`}
            changePct={15.3}
            icon={<IconChartBar size={22} />}
            variant="mint"
          />
          <KpiCard
            label="CTR"
            value="2.4%"
            changePct={0.8}
            icon={<IconClick size={22} />}
            variant="sky"
          />
          <KpiCard
            label="CAC"
            value="$45.20"
            changePct={-2.5}
            icon={<IconUsers size={22} />}
            variant="rose"
          />
        </div>
      </section>
    </div>
  );
}
