export default function DashboardLoading() {
    return (
        <div className="p-6">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-32 bg-gray-200 rounded animate-pulse"></div>
                ))}
            </div>
            <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
        </div>
    );
}
