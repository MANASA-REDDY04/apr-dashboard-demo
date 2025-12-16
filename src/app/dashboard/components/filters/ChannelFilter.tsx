import React from 'react';

export function ChannelFilter() {
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Channel:</span>
            <select className="border rounded p-1 text-sm">
                <option>All Channels</option>
                <option>Organic</option>
                <option>Paid</option>
            </select>
        </div>
    );
}
