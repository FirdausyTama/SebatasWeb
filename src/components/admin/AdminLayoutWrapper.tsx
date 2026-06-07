"use client";

import { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

export default function AdminLayoutWrapper({ children }: { children: React.ReactNode }) {
  // Start open on desktop, closed on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => {
    if (window.innerWidth <= 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className={`admin-body-wrapper ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <AdminSidebar closeSidebar={closeSidebar} />
      
      <main className="admin-main">
        <AdminHeader toggleSidebar={toggleSidebar} />
        <div className="admin-content">
          {children}
        </div>
      </main>
      
      {/* Overlay for mobile when sidebar is open */}
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? "show" : ""}`} 
        onClick={() => setIsSidebarOpen(false)}
      ></div>
    </div>
  );
}
