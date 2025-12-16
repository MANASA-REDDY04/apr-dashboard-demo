"use client";

import { Card } from "../../components/ui/Card";
import { IconUser, IconSettings, IconCurrencyDollar, IconCalendar, IconDeviceDesktop } from "@tabler/icons-react";
import { useState } from "react";

export default function SettingsPage() {
  const [currency, setCurrency] = useState("USD");
  const [dateFormat, setDateFormat] = useState("MM/DD/YYYY");
  const [theme, setTheme] = useState("light");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
           <p className="text-gray-500">Manage your account and dashboard preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* User Profile */}
        <div className="lg:col-span-1 space-y-6">
             <Card>
                <div className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-4">
                    <IconUser className="text-indigo-600" />
                    <h2 className="font-semibold text-gray-900">My Profile</h2>
                </div>
                
                <div className="flex flex-col items-center py-4">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-xl font-bold text-white shadow-md mb-4">
                        JD
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">John Doe</h3>
                    <p className="text-sm text-gray-500">Founder</p>
                </div>

                <div className="space-y-4 mt-2">
                    <div>
                        <label className="block text-xs font-medium text-gray-700 uppercase mb-1">Email Address</label>
                        <input type="email" value="john@example.com" disabled className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-500" />
                    </div>
                     <div>
                        <label className="block text-xs font-medium text-gray-700 uppercase mb-1">Role</label>
                        <input type="text" value="Administrator" disabled className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-500" />
                    </div>
                </div>
             </Card>
        </div>

        {/* Preferences */}
        <div className="lg:col-span-2 space-y-6">
             <Card>
                <div className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-4">
                    <IconSettings className="text-gray-500" />
                    <h2 className="font-semibold text-gray-900">Preferences</h2>
                </div>

                <div className="space-y-6">
                    {/* Currency */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                <IconCurrencyDollar size={20} />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Default Currency</p>
                                <p className="text-xs text-gray-500">Select your preferred currency for reports</p>
                            </div>
                        </div>
                        <select 
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="h-9 rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                        >
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="INR">INR (₹)</option>
                        </select>
                    </div>

                    {/* Date Format */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <IconCalendar size={20} />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Date Format</p>
                                <p className="text-xs text-gray-500">Choose how dates are displayed</p>
                            </div>
                        </div>
                        <select 
                            value={dateFormat}
                            onChange={(e) => setDateFormat(e.target.value)}
                            className="h-9 rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                        >
                            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                        </select>
                    </div>

                    {/* Theme */}
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-violet-50 text-violet-600 rounded-lg">
                                <IconDeviceDesktop size={20} />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Appearance</p>
                                <p className="text-xs text-gray-500">Customize dashboard theme</p>
                            </div>
                        </div>
                         <select 
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                            className="h-9 rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                        >
                            <option value="light">Light Mode</option>
                            <option value="dark" disabled>Dark Mode (Pro)</option>
                        </select>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors">
                        Save Changes
                    </button>
                </div>
             </Card>
        </div>
      </div>
    </div>
  );
}
