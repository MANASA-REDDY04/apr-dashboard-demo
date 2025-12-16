import { Campaign } from "../../types/campaigns";
import { AttributionResult } from "../../types/dashboard";

export const mockCampaigns: Campaign[] = [
  {
    id: "c1",
    name: "Google Search - Brand",
    channel: "Search",
    impressions: 120000,
    clicks: 8200,
    conversions: 420,
    spend: 32000,
  },
  {
    id: "c2",
    name: "Facebook Retargeting",
    channel: "Social",
    impressions: 98000,
    clicks: 6100,
    conversions: 310,
    spend: 21000,
  },
];

export const mockAttributionResults: AttributionResult[] = [
  {
    channel: "Search",
    conversions: 420,
    revenue: 62000,
  },
  {
    channel: "Social",
    conversions: 310,
    revenue: 42000,
  },
];
