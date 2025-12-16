"use client";

import { FilterBar } from "./dashboard/components/filters/FilterBar";
import { KpiSection } from "./dashboard/components/kpi/KpiSection";
import { LineChart } from "./dashboard/components/charts/LineChart";
import { DualAxisChart } from "./dashboard/components/charts/DualAxisChart";
import { AttributionSection } from "./dashboard/components/attribution/AttributionSection";
import { CustomerSection } from "./dashboard/components/customer/CustomerSection";
import { useDashboardQuery } from "../hooks/useDashboardQuery";
import { Card } from "../components/ui/Card";

export default function DashboardPage() {
  const dashboardQuery = useDashboardQuery();

  return (
    <div className="space-y-8 pb-12">
      {/* Header & Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Executive Overview</h1>
          <p className="text-sm text-gray-500">Real-time business performance</p>
        </div>

      </div>

      {/* KPI Section */}
      <div className="flex flex-col gap-6">
        <FilterBar />
        <KpiSection />
      </div>

      {/* Trends Section */}
      <div id="trends" className="grid grid-cols-1 gap-6 lg:grid-cols-2 scroll-mt-24">
        <Card>
            <div className="mb-4">
                <h3 className="text-base font-semibold text-gray-900">Sales Over Time</h3>
                <p className="text-sm text-gray-500">Revenue and total orders</p>
            </div>
            <div className="h-[250px] w-full">
                <LineChart
                    title="" // Title handled by parent Card now
                    data={dashboardQuery.data?.sessions ?? []} // Using sessions for demo, ideally should be revenue/orders
                    isLoading={dashboardQuery.isLoading}
                />
            </div>
        </Card>

        <DualAxisChart />
      </div>

      {/* Attribution Section */}
      <div id="attribution" className="space-y-4 scroll-mt-24">
         <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Attribution & Channels</h2>
         </div>
         <AttributionSection />
      </div>

      {/* Customer Insights */}
      <div id="customers" className="space-y-4 scroll-mt-24">
         <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Customer & Product Insights</h2>
         </div>
         <CustomerSection />
      </div>
    </div>
  );
}
