// src/app/dashboard/components/tables/CampaignTable.tsx
"use client";

import { Card } from "../../../../components/ui/Card";
import { Campaign } from "../../../../types/campaigns";
import { mockCampaigns } from "../../../../data/mock/campaigns";
import { IconTrendingUp } from "@tabler/icons-react";

export function CampaignTable() {
  const campaigns: Campaign[] = mockCampaigns;

  return (
    <Card>
      <h3 className="mb-4 text-sm font-medium text-neutral-700">
        Campaign Performance
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b text-left text-neutral-500">
            <tr>
              <th className="py-2">Campaign</th>
              <th>Channel</th>
              <th>Clicks</th>
              <th>Conversions</th>
              <th>Spend</th>
            </tr>
          </thead>

          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="border-b last:border-0">
                <td className="py-2 font-medium">{campaign.name}</td>
                <td>{campaign.channel}</td>
                <td>{campaign.clicks}</td>
                <td className="flex items-center gap-1">
                  <IconTrendingUp size={14} />
                  {campaign.conversions}
                </td>
                <td>${campaign.spend.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
