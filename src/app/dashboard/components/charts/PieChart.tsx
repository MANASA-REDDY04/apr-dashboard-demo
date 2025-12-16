// src/app/dashboard/components/charts/PieChart.tsx
"use client";

import { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { ChartContainer } from "./ChartContainer";
import { baseChartOptions, registerCharts } from "../../../../lib/chartConfig";
import { AttributionResult } from "../../../../types/dashboard";

type PieChartProps = {
  title: string;
  data: AttributionResult[];
  isLoading?: boolean;
};

export function PieChart({ title, data, isLoading }: PieChartProps) {
  useEffect(() => {
    registerCharts();
  }, []);

  const chartData = {
    labels: data.map((d) => d.channel),
    datasets: [
      {
        data: data.map((d) => d.revenue),
        backgroundColor: [
          "#111827", // neutral-900
          "#374151", // neutral-700
          "#6B7280", // neutral-500
          "#9CA3AF", // neutral-400
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <ChartContainer title={title} isLoading={isLoading}>
      <Pie data={chartData} options={baseChartOptions} />
    </ChartContainer>
  );
}
