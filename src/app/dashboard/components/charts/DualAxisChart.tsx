"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { Card } from "../../../../components/ui/Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export function DualAxisChart() {
  // Mock Data
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  const data: ChartData<"bar" | "line"> = {
    labels,
    datasets: [
      {
        type: "bar" as const,
        label: "Ad Spend",
        data: [4200, 3800, 5100, 4800, 6200, 7500, 6900],
        backgroundColor: "rgba(99, 102, 241, 0.6)", // Indigo
        borderColor: "rgb(99, 102, 241)",
        borderWidth: 1,
        borderRadius: 4,
        yAxisID: "y",
        order: 2,
      },
      {
        type: "line" as const,
        label: "ROAS",
        data: [3.2, 3.5, 2.8, 3.1, 4.2, 3.8, 4.0],
        borderColor: "#10b981", // Emerald
        backgroundColor: "#10b981",
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.3,
        yAxisID: "y1",
        order: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          padding: 20,
          color: "#6b7280",
        },
      },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.9)",
        padding: 12,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#9ca3af", font: { size: 11 } },
      },
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
        grid: { color: "#f3f4f6" },
        ticks: { color: "#9ca3af", callback: (value: any) => `$${value}` },
        border: { display: false },
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        grid: { display: false },
        ticks: { color: "#10b981", callback: (value: any) => `${value}x` },
        border: { display: false },
      },
    },
  };

  return (
    <Card>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">Spend vs ROAS</h3>
        <p className="text-sm text-gray-500">Marketing efficiency over time</p>
      </div>
      <div className="h-[250px] w-full">
        <Chart type="bar" data={data} options={options} />
      </div>
    </Card>
  );
}
