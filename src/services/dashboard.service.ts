// src/services/dashboard.service.ts
import { api } from "./axios";
import { DashboardOverview } from "../types/dashboard";
import { mockDashboardOverview } from "../data/mock/charts";
import { mockKpis } from "../data/mock/kpis";

export async function getDashboardOverview(
  params?: {
    from?: string;
    to?: string;
    channels?: string[];
  }
): Promise<DashboardOverview> {
  // 🔹 MOCK IMPLEMENTATION (for now)
  // Later this becomes:
  // return api.get("/dashboard/overview", { params }).then(res => res.data);

  await new Promise((resolve) => setTimeout(resolve, 500)); // simulate latency

  return {
    ...mockDashboardOverview,
    kpis: mockKpis,
  };
}
