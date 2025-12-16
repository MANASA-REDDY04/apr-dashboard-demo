import React from 'react';

export function CampaignTable() {
    return (
        <div className="w-full overflow-x-auto p-4 border rounded-lg bg-white">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="px-6 py-3">Campaign</th>
                        <th className="px-6 py-3">Budget</th>
                        <th className="px-6 py-3">ROI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-6 py-4" colSpan={3}>No campaigns found</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
