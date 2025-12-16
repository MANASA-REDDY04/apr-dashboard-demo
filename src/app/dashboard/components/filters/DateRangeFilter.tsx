import React from 'react';

export function DateRangeFilter() {
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Date Range:</span>
            <select className="border rounded p-1 text-sm">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
            </select>
        </div>
    );
}
