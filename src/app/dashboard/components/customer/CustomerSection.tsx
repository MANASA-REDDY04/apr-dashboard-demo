"use client";

import { Card } from "../../../../components/ui/Card";
import { IconPackage, IconUserPlus, IconUserCheck, IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";
import clsx from "clsx";
import { formatNumber, formatCurrency } from "../../../../utils/format";

import { useDashboardStats } from "../../../../hooks/useDashboardStats";

export function CustomerSection() {
  const { data } = useDashboardStats();
  // Fallback to empty array if undefined (e.g. during loading)
  const topProducts = data?.products ?? [];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Customer Metrics */}
      <Card className="lg:col-span-1 space-y-6">
        <div>
          <h3 className="text-base font-semibold text-gray-900">Customer Segments</h3>
          <p className="text-sm text-gray-500">New vs Returning</p>
        </div>

        <div className="space-y-4">
            {/* New Customers */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-orange-50 border border-orange-100">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg text-orange-600 shadow-sm">
                        <IconUserPlus size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600">New Customers</p>
                        <p className="text-xl font-bold text-gray-900">1,240</p>
                    </div>
                </div>
                 <div className="flex items-center text-sm font-medium text-green-600">
                    <IconArrowUpRight size={16} />
                    12%
                 </div>
            </div>

             {/* Returning Customers */}
             <div className="flex items-center justify-between p-4 rounded-xl bg-blue-50 border border-blue-100">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg text-blue-600 shadow-sm">
                        <IconUserCheck size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600">Returning</p>
                        <p className="text-xl font-bold text-gray-900">3,850</p>
                    </div>
                </div>
                <div className="flex items-center text-sm font-medium text-red-600">
                    <IconArrowDownRight size={16} />
                    2%
                 </div>
            </div>
            
            <div className="pt-2">
                 <div className="flex justify-between text-xs text-gray-500 mb-1">
                     <span>Ratio</span>
                     <span>24% New / 76% Returning</span>
                 </div>
                 <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden flex">
                     <div className="h-full bg-orange-400 w-[24%]"></div>
                     <div className="h-full bg-blue-500 w-[76%]"></div>
                 </div>
            </div>
        </div>
      </Card>

      {/* Top Products */}
      <Card className="lg:col-span-2">
        <div className="mb-4 flex items-center justify-between">
           <div>
              <h3 className="text-base font-semibold text-gray-900">Top Products</h3>
              <p className="text-sm text-gray-500">By revenue</p>
           </div>
           <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700">View All</button>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50/50 border-b border-gray-100">
                    <tr>
                        <th className="py-3 px-2 font-medium">Product</th>
                        <th className="py-3 px-2 font-medium text-right">Orders</th>
                        <th className="py-3 px-2 font-medium text-right">Revenue</th>
                        <th className="py-3 px-2 font-medium text-right">Trend</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {topProducts.map((product, i) => (
                        <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 px-2">
                                <div className="flex items-center gap-3">
                                    <span className="text-xl bg-gray-100 rounded-md p-1">{product.image}</span>
                                    <span className="font-medium text-gray-900">{product.name}</span>
                                </div>
                            </td>
                            <td className="py-3 px-2 text-right text-gray-600">{formatNumber(product.orders)}</td>
                            <td className="py-3 px-2 text-right font-medium text-gray-900">{formatCurrency(product.revenue)}</td>
                            <td className="py-3 px-2 text-right">
                                <div className="flex justify-end">
                                     <span className={clsx("flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700")}>
                                        <IconArrowUpRight size={12} className="mr-1" />
                                        4%
                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </Card>
    </div>
  );
}
