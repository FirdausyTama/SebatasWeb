"use client";

import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

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
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              required 
            />
          </div>
          <button type="submit" className="btn-admin">
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
