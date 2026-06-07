"use client";

import { usePathname } from "next/navigation";

export default function AdminHeader() {
  const pathname = usePathname();
  
  let pageTitle = "Dashboard";
  if (pathname.includes("/pesanan")) pageTitle = "Kelola Pesanan";
  if (pathname.includes("/paket")) pageTitle = "Paket Harga";
  if (pathname.includes("/portofolio")) pageTitle = "Kelola Portofolio";
  if (pathname.includes("/konten")) pageTitle = "Konten Landing Page";

  return (
    <header className="admin-header">
      <div className="admin-header-title">{pageTitle}</div>
      <div className="admin-profile">
        <div className="admin-avatar">A</div>
        <span>Admin</span>
      </div>
    </header>
  );
}
