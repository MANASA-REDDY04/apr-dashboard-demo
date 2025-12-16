import React from 'react';

interface KpiCardProps {
    title: string;
    value: string | number;
    change?: number;
    trend?: 'up' | 'down' | 'neutral';
}

export function KpiCard({ title, value, change, trend }: KpiCardProps) {
    return (
        <div className="p-4 rounded-xl border bg-white shadow-sm">
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <div className="mt-2 flex items-baseline gap-2">
                <h3 className="text-2xl font-bold">{value}</h3>
                {change !== undefined && (
                    <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${trend === 'up' ? 'bg-green-100 text-green-700' :
                            trend === 'down' ? 'bg-red-100 text-red-700' : 'bg-gray-100'
                        }`}>
                        {change > 0 ? '+' : ''}{change}%
                    </span>
                )}
            </div>
        </div>
    );
}
