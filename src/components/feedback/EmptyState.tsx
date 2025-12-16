import React from 'react';

export function EmptyState({ message }: { message: string }) {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center text-gray-500">
            <p>{message}</p>
        </div>
    );
}
