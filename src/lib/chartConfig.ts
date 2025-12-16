import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

export function registerCharts() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
  );
}

const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 800,
    easing: "easeOutQuart" as const,
  },
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
};

export const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
      borderColor: "#6366f1",
      fill: "start",
      backgroundColor: "rgba(99, 102, 241, 0.1)",
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      backgroundColor: "#6366f1",
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#fff",
      titleColor: "#111827",
      bodyColor: "#4b5563",
      borderColor: "#e5e7eb",
      borderWidth: 1,
      padding: 12,
      displayColors: false,
      callbacks: {
        label: (context: any) => ` ${context.parsed.y}`,
      },
      titleFont: { size: 13, weight: "bold" as const },
      bodyFont: { size: 13 },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#9ca3af",
        font: { size: 11 },
      },
    },
    y: {
      grid: {
        color: "#f3f4f6",
      },
      ticks: {
        color: "#9ca3af",
        font: { size: 11 },
        maxTicksLimit: 6,
      },
      border: {
        display: false,
      },
    },
  },
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
};

export const barChartOptions: ChartOptions<'bar'> = commonOptions;

// Deprecated: Use lineChartOptions or barChartOptions instead
export const baseChartOptions = commonOptions;
