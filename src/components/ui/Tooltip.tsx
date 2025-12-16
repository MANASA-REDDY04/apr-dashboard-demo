import React, { ReactNode } from 'react';

export function Tooltip({ children, content }: { children: ReactNode; content: string }) {
    return (
        <div className="group relative inline-block">
            {children}
            <div className="hidden group-hover:block absolute z-10 px-2 py-1 text-xs text-white bg-black rounded -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                {content}
            </div>
        </div>
    );
}
