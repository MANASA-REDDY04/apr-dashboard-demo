"use client";

import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <Sidebar />
      <div className="flex flex-1 flex-col w-full lg:pl-64">
        <Topbar />
        <main className="flex-1 p-4 lg:p-8 w-full max-w-[1600px] mx-auto">
          <div className="space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
