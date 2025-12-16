import React, { ReactNode } from 'react';

export function Card({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={`p-4 rounded-lg border bg-white shadow-sm ${className || ''}`}>
            {children}
        </div>
    );
}
