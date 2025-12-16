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

export const lineChartOptions: ChartOptions<'line'> = commonOptions;

export const barChartOptions: ChartOptions<'bar'> = commonOptions;

// Deprecated: Use lineChartOptions or barChartOptions instead
export const baseChartOptions = commonOptions;
