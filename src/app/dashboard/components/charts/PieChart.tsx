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
          "#6366f1", // Indigo-500
          "#8b5cf6", // Violet-500
          "#10b981", // Emerald-500
          "#06b6d4", // Cyan-500
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
