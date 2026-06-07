"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi login sukses, langsung diarahkan ke dashboard
    router.push("/admin/dashboard");
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          Sebatas<span style={{ color: "var(--dark)" }}>Web</span>
        </div>
        <form onSubmit={handleLogin}>
          <div className="admin-form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="admin@sebatasweb.com" 
              required 
            />
          </div>
          <div className="admin-form-group">
            <label htmlFor="password">Password</label>
            <div style={{ position: "relative" }}>
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                placeholder="••••••••" 
                required 
                style={{ paddingRight: "40px" }}
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                style={{ 
                  position: "absolute", 
                  right: "12px", 
                  top: "50%", 
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button type="submit" className="btn-admin">
            Masuk
          </button>

          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            marginTop: "24px",
            fontSize: "0.9rem"
          }}>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", color: "var(--dark-muted)", fontWeight: "500" }}>
              <input type="checkbox" style={{ width: "16px", height: "16px", cursor: "pointer", margin: 0 }} /> Ingat saya
            </label>
            <Link href="/" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "600" }}>
              ← Kembali ke Beranda
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
