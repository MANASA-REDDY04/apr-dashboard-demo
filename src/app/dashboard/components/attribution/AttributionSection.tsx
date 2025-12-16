"use client";



import { useDashboardStats } from "../../../../hooks/useDashboardStats";
import { BarChart } from "../charts/BarChart";
import { PieChart } from "../charts/PieChart";
import { CampaignTable } from "../tables/CampaignTable";
import { Card } from "../../../../components/ui/Card";

export function AttributionSection() {
  const { data, isLoading } = useDashboardStats();
  const attributionData = data?.attribution ?? [];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <BarChart
          title="Revenue by Channel"
          data={attributionData}
          isLoading={isLoading}
        />

        <PieChart
          title="Attribution Share"
          data={attributionData}
          isLoading={isLoading}
        />
      </div>

      <div id="campaigns" className="rounded-xl border border-gray-100 bg-white overflow-hidden shadow-sm scroll-mt-24">
        <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-4">
          <h3 className="text-base font-semibold text-gray-900">Campaign Performance</h3>
          <p className="text-sm text-gray-500">Breakdown by campaign and channel</p>
        </div>
        <div className="p-0">
          <CampaignTable />
        </div>
      </div>
    </div>
  );
}
