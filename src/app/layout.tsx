import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional | terasweb.id",
  description: "Jasa Pembuatan Website Profesional yang Modern, Cepat, dan Responsif. Kembangkan bisnis Anda bersama Terasweb.id dari desain hingga deploy agar websitemu selalu optimal.",
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
