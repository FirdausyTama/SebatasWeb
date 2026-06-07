"use client";

import { usePathname } from "next/navigation";

export default function AdminHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
  const pathname = usePathname();
  
  let pageTitle = "Dashboard";
  if (pathname.includes("/pesanan")) pageTitle = "Kelola Pesanan";
  if (pathname.includes("/paket")) pageTitle = "Paket Harga";
  if (pathname.includes("/portofolio")) pageTitle = "Kelola Portofolio";
  if (pathname.includes("/konten")) pageTitle = "Konten Landing Page";

  return (
    <header className="admin-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button onClick={toggleSidebar} className="admin-menu-btn" aria-label="Toggle Sidebar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div className="admin-header-title">{pageTitle}</div>
      </div>
      <div className="admin-profile">
        <div className="admin-avatar">A</div>
        <span>Admin</span>
      </div>
    </header>
  );
}
