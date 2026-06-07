import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPromo from "@/components/FloatingPromo";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional",
  description: "",
  icons: {
    icon: "/assets/images/faviconq.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={outfit.className}>
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
      </body>
    </html>
  );
}
