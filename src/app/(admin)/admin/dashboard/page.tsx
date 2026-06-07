import Link from "next/link";

export default function AdminDashboard() {
  return (
    <>
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          Sebatas<span style={{ color: "var(--dark)" }}>Web</span>
        </div>
        <nav className="admin-nav">
          <Link href="/admin/dashboard" className="admin-nav-item active">
            Dashboard
          </Link>
          <Link href="#" className="admin-nav-item">
            Pesanan
          </Link>
          <Link href="#" className="admin-nav-item">
            Paket Harga
          </Link>
          <Link href="#" className="admin-nav-item">
            Pengaturan
          </Link>
        </nav>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div className="admin-header-title">Dashboard</div>
          <div className="admin-profile">
            <div className="admin-avatar">A</div>
            <span>Admin</span>
          </div>
        </header>

        <div className="admin-content">
          <div className="admin-stats-grid">
            <div className="admin-stat-card">
              <div className="admin-stat-title">Total Pesanan</div>
              <div className="admin-stat-value">24</div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-title">Pesanan Aktif</div>
              <div className="admin-stat-value" style={{ color: "var(--primary)" }}>5</div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-title">Pengunjung Bulan Ini</div>
              <div className="admin-stat-value">1,204</div>
            </div>
          </div>

          <div className="admin-table-container">
            <div className="admin-table-header">Pesanan Terbaru</div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID Pesanan</th>
                  <th>Klien</th>
                  <th>Paket</th>
                  <th>Status</th>
                  <th>Tanggal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#SW-001</td>
                  <td>Budi Santoso</td>
                  <td>Paket Pro</td>
                  <td><span className="admin-badge badge-warning">Proses</span></td>
                  <td>07 Jun 2026</td>
                </tr>
                <tr>
                  <td>#SW-002</td>
                  <td>PT Digital Maju</td>
                  <td>Custom Website</td>
                  <td><span className="admin-badge badge-primary">Diskusi</span></td>
                  <td>05 Jun 2026</td>
                </tr>
                <tr>
                  <td>#SW-003</td>
                  <td>CV Toko Berkah</td>
                  <td>Paket Premium</td>
                  <td><span className="admin-badge badge-success">Selesai</span></td>
                  <td>01 Jun 2026</td>
                </tr>
                <tr>
                  <td>#SW-004</td>
                  <td>Andi Pratama</td>
                  <td>Paket Dasar</td>
                  <td><span className="admin-badge badge-success">Selesai</span></td>
                  <td>28 Mei 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
