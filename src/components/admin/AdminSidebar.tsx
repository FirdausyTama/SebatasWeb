"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-logo">
        Sebatas<span style={{ color: "var(--dark)" }}>Web</span>
      </div>
      <nav className="admin-nav">
        <Link 
          href="/admin/dashboard" 
          className={`admin-nav-item ${pathname === "/admin/dashboard" ? "active" : ""}`}
        >
          Dashboard
        </Link>
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
        <Link href="/admin/login" className="admin-logout-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Logout
        </Link>
      </div>
    </aside>
  );
}
