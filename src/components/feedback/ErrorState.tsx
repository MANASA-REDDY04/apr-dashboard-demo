import React from 'react';

export function ErrorState({ error }: { error: string }) {
    return (
        <div className="p-4 bg-red-50 text-red-600 rounded">
            Error: {error}
        </div>
    );
}
