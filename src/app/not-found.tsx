import Link from "next/link";

export const metadata = {
  title: "404 - Halaman Tidak Ditemukan | SebatasWeb",
  description: "Maaf, halaman yang Anda cari tidak ditemukan.",
};

export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#f8fafc",
      fontFamily: "inherit"
    }}>
      <div style={{
        position: "relative",
        animation: "float 6s ease-in-out infinite"
      }}>
        <img 
          src="/assets/images/foxsedih.png" 
          alt="Rubah Sedih - Halaman Tidak Ditemukan" 
          style={{
            width: "280px",
            maxWidth: "100%",
            height: "auto",
            marginBottom: "10px",
            filter: "drop-shadow(0 15px 25px rgba(234, 88, 12, 0.2))"
          }}
        />
      </div>
      
      <h1 style={{
        fontSize: "4rem",
        fontWeight: "800",
        color: "var(--primary)",
        marginBottom: "8px",
        lineHeight: "1"
      }}>
        404
      </h1>
      
      <h2 style={{
        fontSize: "1.75rem",
        fontWeight: "700",
        color: "var(--dark)",
        marginBottom: "16px"
      }}>
        Waduh! Anda Tersesat
      </h2>
      
      <p style={{
        color: "var(--text-muted)",
        maxWidth: "450px",
        marginBottom: "36px",
        lineHeight: "1.6",
        fontSize: "1.05rem"
      }}>
        Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau Anda salah mengetikkan alamat URL. Mari kita kembali ke jalan yang benar!
      </p>
      
      <Link href="/" className="btn btn-primary" style={{
        display: "inline-block",
        padding: "14px 36px",
        borderRadius: "50px",
        fontWeight: "700",
        fontSize: "1.05rem",
        boxShadow: "0 10px 20px -5px rgba(234, 88, 12, 0.4)",
        transition: "all 0.3s ease"
      }}>
        Kembali ke Beranda
      </Link>
      
      <style>{`
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 25px -5px rgba(234, 88, 12, 0.5);
        }
      `}</style>
    </div>
  );
}
