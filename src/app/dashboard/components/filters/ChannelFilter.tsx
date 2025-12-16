// src/app/dashboard/components/filters/ChannelFilter.tsx
"use client";

import { Dropdown } from "../../../../components/ui/Dropdown";
import { useDashboardFilters } from "../../../../hooks/useDashboardFilters";

const CHANNELS = ["Search", "Social", "Email", "Direct"];

export function ChannelFilter() {
  const { channels, setChannels } = useDashboardFilters();

  function toggleChannel(channel: string) {
    if (channels.includes(channel)) {
      setChannels(channels.filter((c) => c !== channel));
    } else {
      setChannels([...channels, channel]);
    }
  }

  return (
    <Dropdown
      trigger={
        <button className="rounded-md border px-3 py-1 text-sm">
          Channels
        </button>
      }
      items={CHANNELS.map((channel) => ({
        label: `${channels.includes(channel) ? "✓ " : ""}${channel}`,
        onSelect: () => toggleChannel(channel),
      }))}
    />
  );
}
