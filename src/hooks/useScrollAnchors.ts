"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useScrollAnchors() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run if we have a hash in the URL (which Next.js handles, but sometimes we need manual help if it's SPA style)
    // Actually, Sidebar uses standard href="#id".
    // We just need to make sure scroll-padding is set in CSS or Layout for fixed header.
    // This hook might be redundant if CSS `scroll-padding-top` is set.
    // Let's just ensure smooth behavior.
    
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
       document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
}
