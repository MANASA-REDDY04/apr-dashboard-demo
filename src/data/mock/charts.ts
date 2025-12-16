import { DashboardOverview } from "../../types/dashboard";

const dates = [
  "2025-09-01",
  "2025-09-02",
  "2025-09-03",
  "2025-09-04",
  "2025-09-05",
  "2025-09-06",
  "2025-09-07",
];

export const mockDashboardOverview: DashboardOverview = {
  kpis: [], // injected separately
  sessions: dates.map((date, i) => ({
    date,
    value: 1500 + i * 120,
  })),
  conversions: dates.map((date, i) => ({
    date,
    value: 80 + i * 5,
  })),
  revenue: dates.map((date, i) => ({
    date,
    value: 12000 + i * 900,
  })),
};
