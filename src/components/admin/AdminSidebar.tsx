"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logoutAction } from "@/app/(admin)/admin/login/actions";

export default function AdminSidebar({ closeSidebar }: { closeSidebar?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    await logoutAction();
    router.push("/admin/login");
  };

  return (
    <aside className="admin-sidebar">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px', marginBottom: '32px' }}>
        <div className="admin-sidebar-logo">
          Sebatas<span style={{ color: "var(--dark)" }}>Web</span>
        </div>
        {/* Mobile close button */}
        <button onClick={closeSidebar} className="admin-close-btn" aria-label="Close Sidebar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <nav className="admin-nav">

        <Link 
          href="/admin/pesanan" 
          className={`admin-nav-item ${pathname === "/admin/pesanan" ? "active" : ""}`}
        >
          Pesanan
        </Link>
        <Link 
          href="/admin/paket" 
          className={`admin-nav-item ${pathname === "/admin/paket" ? "active" : ""}`}
        >
          Paket Harga
        </Link>
        <Link 
          href="/admin/portofolio" 
          className={`admin-nav-item ${pathname === "/admin/portofolio" ? "active" : ""}`}
        >
          Kelola Portofolio
        </Link>
        <Link 
          href="/admin/konten" 
          className={`admin-nav-item ${pathname === "/admin/konten" ? "active" : ""}`}
        >
          Konten Landing Page
        </Link>
      </nav>
      
      <div style={{ marginTop: "auto", padding: "0 16px" }}>
        <a href="#" onClick={handleLogout} className="admin-logout-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Logout
        </a>
      </div>
    </aside>
  );
}
