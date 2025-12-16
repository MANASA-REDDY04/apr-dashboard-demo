"use client";

import { useSearchStore } from "../../store/useSearchStore";
import { useUIStore } from "../../store/useUIStore";
import { IconSearch, IconBell, IconHelpCircle, IconMenu2, IconChevronDown, IconLogout, IconUser, IconSettings } from "@tabler/icons-react";
import { useState, useRef, useEffect, useMemo } from "react";
import { mockCampaigns } from "../../data/mock/campaigns";
import { mockAttributionResults } from "../../data/mock/campaigns";
import clsx from "clsx";

export function Topbar() {
  const { searchQuery, setSearchQuery, isSearching, setIsSearching } = useSearchStore();
  const { toggleSidebar } = useUIStore();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && !searchInputRef.current?.contains(event.target as Node)) {
        setIsSearching(false);
      }
      if (showProfileMenu && !(event.target as Element).closest("#profile-menu-container")) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsSearching, showProfileMenu]);

  // Derived suggestions
  const suggestions = useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase();
    
    const campaigns = mockCampaigns
      .filter(c => c.name.toLowerCase().includes(query))
      .map(c => ({ type: "Campaign", label: c.name }));
      
    const channels = mockAttributionResults
      .filter(a => a.channel.toLowerCase().includes(query))
      .map(a => ({ type: "Channel", label: a.channel }));

    return [...campaigns, ...channels].slice(0, 5);
  }, [searchQuery]);

  // Local state for debouncing
  const [localQuery, setLocalQuery] = useState(searchQuery);

  // Sync upstream changes to local (optional, but good practice)
  useEffect(() => {
    if (searchQuery !== localQuery) {
        setLocalQuery(searchQuery);
    }
  }, []);

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
        setSearchQuery(localQuery);
        // Only trigger "searching" UI if query is not empty
        if (localQuery.length > 0) {
            setIsSearching(true);
        } else {
             setIsSearching(false);
        }
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [localQuery, setSearchQuery, setIsSearching]);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm lg:px-6">
      {/* Left: Mobile Toggle & Breadcrumbs */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="rounded-md p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
        >
          <IconMenu2 size={24} />
        </button>

        <div className="hidden md:block">
          <nav className="text-sm font-medium text-gray-500">
             <span className="hover:text-gray-900 cursor-pointer transition-colors">Home</span>
             <span className="mx-2 text-gray-300">/</span>
             <span className="text-gray-900 font-semibold">Dashboard</span>
          </nav>
        </div>
      </div>

      {/* Right: Search & Actions */}
      <div className="flex flex-1 items-center justify-end gap-3 lg:gap-6">
        {/* Global Search */}
        <div className="relative w-full max-w-[200px] lg:max-w-md">
          <IconSearch
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search campaigns, channels..."
            className="h-9 lg:h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 lg:pl-10 pr-4 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-gray-400"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            onFocus={() => {
                if(localQuery.length > 0) setIsSearching(true);
            }}
          />
          
          {/* Autocomplete Dropdown */}
          {isSearching && searchQuery.length > 0 && suggestions.length > 0 && (
            <div 
                ref={dropdownRef}
                className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-gray-100 bg-white p-2 shadow-lg ring-1 ring-black/5"
            >
                {suggestions.map((suggestion, idx) => (
                    <button
                        key={idx}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 text-left"
                        onClick={() => {
                            setSearchQuery(suggestion.label);
                            setIsSearching(false);
                        }}
                    >
                        <span className={clsx(
                            "rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                            suggestion.type === "Campaign" ? "bg-indigo-100 text-indigo-700" : "bg-emerald-100 text-emerald-700"
                        )}>
                            {suggestion.type}
                        </span>
                        {suggestion.label}
                    </button>
                ))}
            </div>
          )}
        </div>

        <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>

        {/* Actions */}
        <div className="flex items-center gap-2">
            <button className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors relative">
              <IconBell size={20} />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
            </button>
            <button className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
              <IconHelpCircle size={20} />
            </button>
        </div>

        {/* User Avatar */}
        <div id="profile-menu-container" className="relative">
            <div 
                className="flex items-center gap-3 cursor-pointer pl-2 border-l border-transparent sm:border-gray-200"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 text-xs font-bold text-white shadow ring-2 ring-white transition-transform hover:scale-105">
                JD
            </div>
            <div className="hidden lg:block text-left">
                <p className="text-sm font-semibold text-gray-900 leading-none">John Doe</p>
                <p className="text-xs text-gray-500 leading-none mt-1">Founder</p>
            </div>
            <IconChevronDown size={16} className="text-gray-400 hidden lg:block" />
            </div>

            {/* Profile Dropdown */}
            {showProfileMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-gray-100 bg-white p-1 shadow-lg ring-1 ring-black/5 z-50">
                    <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        <IconUser size={16} /> Profile
                    </button>
                    <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        <IconSettings size={16} /> Settings
                    </button>
                    <div className="my-1 h-px bg-gray-100" />
                    <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-rose-600 hover:bg-rose-50">
                        <IconLogout size={16} /> Logout
                    </button>
                </div>
            )}
        </div>
      </div>
    </header>
  );
}
