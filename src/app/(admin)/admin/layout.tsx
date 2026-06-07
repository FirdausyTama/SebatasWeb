import "./admin.css";

export const metadata = {
  title: "Admin Panel | SebatasWeb",
  description: "Halaman administrasi SebatasWeb",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-body">
      {children}
    </div>
  );
}
