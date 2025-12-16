// src/app/dashboard/components/charts/LineChart.tsx
"use client";

import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { ChartContainer } from "./ChartContainer";
import { lineChartOptions, registerCharts } from "../../../../lib/chartConfig";
import { TimeSeriesPoint } from "../../../../types/dashboard";

type LineChartProps = {
  title: string;
  data: TimeSeriesPoint[];
  isLoading?: boolean;
};

export function LineChart({ title, data, isLoading }: LineChartProps) {
  useEffect(() => {
    registerCharts();
  }, []);

  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: title,
        data: data.map((d) => d.value),
        borderColor: "#000",
        backgroundColor: "rgba(0,0,0,0.1)",
        tension: 0.4,
      },
    ],
  };

  return (
    <ChartContainer title={title} isLoading={isLoading}>
      <Line data={chartData} options={baseChartOptions} />
    </ChartContainer>
  );
}
