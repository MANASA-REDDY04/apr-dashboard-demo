import React from 'react';

export function Modal({ children, isOpen, onClose }: { children: React.ReactNode, isOpen: boolean, onClose: () => void }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white p-6 rounded-lg shadow-xl relative min-w-[300px]">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">✕</button>
                {children}
            </div>
        </div>
    );
}
