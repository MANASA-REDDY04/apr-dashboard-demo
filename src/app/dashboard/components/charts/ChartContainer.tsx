import React, { ReactNode } from 'react';

interface ChartContainerProps {
    title: string;
    children: ReactNode;
}

export function ChartContainer({ title, children }: ChartContainerProps) {
    return (
        <div className="p-4 border rounded-xl bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <div className="w-full h-[300px]">
                {children}
            </div>
        </div>
    );
}
