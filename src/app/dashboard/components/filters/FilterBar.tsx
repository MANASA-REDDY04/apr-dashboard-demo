"use client";

import { useSearchStore } from "../../../../store/useSearchStore";
import { IconFilter, IconCalendar, IconRefresh } from "@tabler/icons-react";

export function FilterBar() {
  const { 
    pendingDateRange, setPendingDateRange, 
    pendingChannel, setPendingChannel,
    applyFilters, resetFilters 
  } = useSearchStore();

  const channels = ["All", "Search", "Social", "Email", "Direct", "Referral"];
  const ranges = [
    { label: "Last 7 Days", value: "7d" },
    { label: "Last 30 Days", value: "30d" },
    { label: "This Months", value: "mtd" },
    { label: "Last Month", value: "last_month" },
  ];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2">
        <IconFilter size={20} className="text-gray-400" />
        <span className="text-sm font-medium text-gray-700">Filters:</span>
        
        <select
            value={pendingChannel}
            onChange={(e) => setPendingChannel(e.target.value)}
            className="h-9 rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all cursor-pointer hover:bg-white"
        >
            {channels.map((c) => (
                <option key={c} value={c}>{c}</option>
            ))}
        </select>
      </div>

      <div className="flex items-center gap-3">
         <div className="flex items-center gap-2">
            <IconCalendar size={18} className="text-gray-400" />
            <select 
                value={pendingDateRange} 
                onChange={(e) => setPendingDateRange(e.target.value)}
                className="h-9 rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all cursor-pointer hover:bg-white"
            >
                {ranges.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                ))}
            </select>
         </div>

         <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>

         <button
            onClick={applyFilters}
            className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         >
            Apply
         </button>

         <button 
            onClick={resetFilters}
            className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-indigo-600 transition-colors"
         >
            <IconRefresh size={14} />
            Reset
         </button>
      </div>
    </div>
  );
}
