import React from 'react';

export function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r min-h-screen p-4">
            <nav>
                <ul>
                    <li className="mb-2 font-bold">Menu</li>
                    <li>Dashboard</li>
                    <li>Settings</li>
                </ul>
            </nav>
        </aside>
    );
}
