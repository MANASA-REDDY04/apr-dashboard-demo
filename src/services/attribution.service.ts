import { AttributionResult } from "../types/dashboard";
import { mockAttributionResults } from "../data/mock/campaigns";

export async function getAttributionResults(): Promise<AttributionResult[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  return mockAttributionResults;
}
