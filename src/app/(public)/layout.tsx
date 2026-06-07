import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPromo from "@/components/FloatingPromo";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Decorative background elements */}
      <div className="bg-stripes">
        <div className="stripe stripe-1"></div>
        <div className="stripe stripe-2"></div>
        <div className="stripe stripe-3"></div>
      </div>
      <Header />
      {children}
      <Footer />
      <FloatingPromo />
    </>
  );
}
