import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sebatasweb.com"), // Pastikan ini domain asli Anda
  title: "Jasa Pembuatan Website Profesional",
  description: "Jasa Pembuatan Website Profesional dan Terpercaya",
  openGraph: {
    title: "Jasa Pembuatan Website Profesional",
    description: "Jasa Pembuatan Website Profesional dan Terpercaya",
    images: ["/assets/images/og-image.png"],
    siteName: "SebatasWeb",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Profesional",
    description: "Jasa Pembuatan Website Profesional dan Terpercaya",
    images: ["/assets/images/og-image.png"],
  },
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
        {children}
      </body>
    </html>
  );
}
