export type KpiMetric = {
  id: string;
  label: string;
  value: number;
  changePct: number; // + / - percentage
};

export type TimeSeriesPoint = {
  date: string; // ISO date
  value: number;
};

export type DashboardOverview = {
  kpis: KpiMetric[];
  sessions: TimeSeriesPoint[];
  conversions: TimeSeriesPoint[];
  revenue: TimeSeriesPoint[];
};

export type AttributionResult = {
  channel: string;
  conversions: number;
  revenue: number;
};