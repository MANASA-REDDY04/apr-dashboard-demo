// src/app/dashboard/components/charts/BarChart.tsx
"use client";

import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { ChartContainer } from "./ChartContainer";
import { baseChartOptions, registerCharts } from "../../../../lib/chartConfig";
import { AttributionResult } from "../../../../types/dashboard";

type BarChartProps = {
  title: string;
  data: AttributionResult[];
  isLoading?: boolean;
};

export function BarChart({ title, data, isLoading }: BarChartProps) {
  useEffect(() => {
    registerCharts();
  }, []);

  const chartData = {
    labels: data.map((d) => d.channel),
    datasets: [
      {
        label: "Revenue",
        data: data.map((d) => d.revenue),
        backgroundColor: "#000",
      },
    ],
  };

  return (
    <ChartContainer title={title} isLoading={isLoading}>
      <Bar data={chartData} options={baseChartOptions} />
    </ChartContainer>
  );
}
