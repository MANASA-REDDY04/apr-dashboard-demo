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
  {
    id: "c3",
    name: "Summer Sale Email",
    channel: "Email",
    impressions: 45000,
    clicks: 12500,
    conversions: 890,
    spend: 1500,
  },
  {
    id: "c4",
    name: "Affiliate Partner Program",
    channel: "Referral",
    impressions: 25000,
    clicks: 4500,
    conversions: 210,
    spend: 5000,
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
  {
    channel: "Email",
    conversions: 890,
    revenue: 28000,
  },
  {
    channel: "Referral",
    conversions: 210,
    revenue: 15000,
  },
];
