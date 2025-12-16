"use client";

import { useEffect } from "react";

export default function DashboardError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="p-6 flex flex-col items-center justify-center min-h-[400px]">
            <h2 className="text-xl font-bold mb-4">Failed to load dashboard data</h2>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Retry
            </button>
        </div>
    );
}
