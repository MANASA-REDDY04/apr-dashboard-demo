export default function DashboardPage() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid gap-6">
                {/* KPI Grid Section */}
                <div className="p-4 border rounded-lg bg-gray-50">
                    <p className="text-gray-500">KPI Grid Placeholder</p>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg bg-gray-50 h-[300px]">
                        <p className="text-gray-500">Sales Chart Placeholder</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-50 h-[300px]">
                        <p className="text-gray-500">User Activity Placeholder</p>
                    </div>
                </div>

                {/* Tables Section */}
                <div className="p-4 border rounded-lg bg-gray-50">
                    <p className="text-gray-500">Recent Transactions Placeholder</p>
                </div>
            </div>
        </div>
    );
}
