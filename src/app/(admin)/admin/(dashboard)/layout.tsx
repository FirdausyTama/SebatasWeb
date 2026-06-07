import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminSidebar />
      <main className="admin-main">
        <AdminHeader />
        <div className="admin-content">
          {children}
        </div>
      </main>
    </>
  );
}
