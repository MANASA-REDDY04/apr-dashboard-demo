"use client";

import { useDashboardQuery } from "./useDashboardQuery";
import { useSearchStore } from "../store/useSearchStore";
import { useQuery } from "@tanstack/react-query";
import { getAttributionResults } from "../services/attribution.service"; // Ensure relative import if needed or alias if working
import { useMemo } from "react";
import { DashboardOverview, AttributionResult } from "../types/dashboard";
import { mockProducts } from "../data/mock/products";

export function useDashboardStats() {
  const dashboardQuery = useDashboardQuery();
  const attributionQuery = useQuery({
      queryKey: ["attribution-results"],
      queryFn: getAttributionResults,
  });

  const { searchQuery, appliedDateRange, appliedChannel } = useSearchStore();

  const filteredData = useMemo(() => {
    if (!dashboardQuery.data || !attributionQuery.data) return null;

    const query = searchQuery.toLowerCase();
    
    // MOCK Filtering Logic
    // Using APPLIED values
    
    // 1. Filter Attribution Results (Channels)
    let filteredAttribution = attributionQuery.data;
    
    if (appliedChannel !== "All") {
        filteredAttribution = filteredAttribution.filter(
            (item: AttributionResult) => item.channel === appliedChannel
        );
    }
    
    // If search query is present, further filter attribution
    if (query) {
        filteredAttribution = filteredAttribution.filter(
             (item: AttributionResult) => item.channel.toLowerCase().includes(query)
        );
    }

    // 2. Mock Date Range Effect
    const modifier = appliedDateRange === "30d" ? 1.5 : appliedDateRange === "mtd" ? 1.2 : 1;
    
    const modifiedSessions = dashboardQuery.data.sessions.map(s => ({ ...s, value: Math.floor(s.value * modifier) }));
    const modifiedRevenue = dashboardQuery.data.revenue.map(r => ({ ...r, value: Math.floor(r.value * modifier) }));

    // 3. Filter Products
    let filteredProducts = mockProducts;
    if (query) {
       filteredProducts = mockProducts.filter(p => 
          p.name.toLowerCase().includes(query)
       );
    }

    return {
      ...dashboardQuery.data,
      sessions: modifiedSessions,
      revenue: modifiedRevenue,
      attribution: filteredAttribution.length > 0 ? filteredAttribution : (appliedChannel === "All" && !query ? attributionQuery.data : []),
      products: filteredProducts,
    };
  }, [dashboardQuery.data, attributionQuery.data, searchQuery, appliedDateRange, appliedChannel]);

  return {
    data: filteredData,
    isLoading: dashboardQuery.isLoading || attributionQuery.isLoading,
    searchQuery,
  };
}
