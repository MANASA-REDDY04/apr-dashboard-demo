// src/app/dashboard/components/tables/CampaignTable.tsx
"use client";

import { Card } from "../../../../components/ui/Card";
import { Campaign } from "../../../../types/campaigns";
import { mockCampaigns } from "../../../../data/mock/campaigns";
import { IconTrendingUp } from "@tabler/icons-react";
import clsx from "clsx";
import { formatNumber, formatCurrency } from "../../../../utils/format";

export function CampaignTable() {
  const campaigns: Campaign[] = mockCampaigns;

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-900">Campaign Performance</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 font-medium">
            <tr>
              <th className="px-6 py-3 rounded-tl-lg">Campaign</th>
              <th className="px-6 py-3">Channel</th>
              <th className="px-6 py-3 text-right">Impressions</th>
              <th className="px-6 py-3 text-right">Clicks</th>
              <th className="px-6 py-3 text-right">Conv.</th>
              <th className="px-6 py-3 text-right rounded-tr-lg">Spend</th>
              <th className="px-6 py-3 text-center">Trend</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                   <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{campaign.name}</span>
                      <span className="text-xs text-gray-500">ID: {campaign.id}</span>
                   </div>
                </td>
                <td className="px-6 py-4">
                   <span className={clsx(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                      campaign.channel === "Search" && "bg-blue-100 text-blue-800",
                      campaign.channel === "Social" && "bg-purple-100 text-purple-800",
                      campaign.channel === "Email" && "bg-yellow-100 text-yellow-800",
                      campaign.channel === "Referral" && "bg-green-100 text-green-800",
                      !["Search", "Social", "Email", "Referral"].includes(campaign.channel) && "bg-gray-100 text-gray-800"
                   )}>
                      {campaign.channel}
                   </span>
                </td>
                <td className="px-6 py-4 text-right text-gray-600">{formatNumber(campaign.impressions)}</td>
                <td className="px-6 py-4 text-right text-gray-600">{formatNumber(campaign.clicks)}</td>
                <td className="px-6 py-4 text-right text-gray-900 font-medium">{formatNumber(campaign.conversions)}</td>
                <td className="px-6 py-4 text-right text-gray-900 font-medium">{formatCurrency(campaign.spend)}</td>
                <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center text-xs font-semibold text-emerald-600 bg-emerald-50 rounded-full px-2 py-1 w-fit mx-auto">
                        <IconTrendingUp size={12} className="mr-1" />
                        High
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
