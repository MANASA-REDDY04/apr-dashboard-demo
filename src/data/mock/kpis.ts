import { KpiMetric } from "../../types/dashboard";

export const mockKpis: KpiMetric[] = [
  {
    id: "sessions",
    label: "Sessions",
    value: 12450,
    changePct: 6.2,
  },
  {
    id: "users",
    label: "Users",
    value: 8320,
    changePct: 3.1,
  },
  {
    id: "conversions",
    label: "Conversions",
    value: 640,
    changePct: -1.4,
  },
  {
    id: "revenue",
    label: "Revenue",
    value: 98250,
    changePct: 8.9,
  },
];
