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
  title: "Pembuatan Website Murah & Profesional | SebatasWeb",
  description: "Sedang mencari jasa pembuatan website murah namun tetap profesional? SebatasWeb melayani pembuatan website perusahaan, toko online, company profile, dan UMKM dengan kualitas tinggi.",
  keywords: "jasa pembuatan website, jasa buat website murah, bikin web profesional, jasa web developer, jasa pembuatan website UMKM, website toko online murah, jasa landing page, jasa bikin web company profile, jasa pembuatan website yogyakarta, jasa website jogja, joki website, joki bikin web, joki tugas website, joki web developer, web developer yogyakarta, jasa buat web jogja murah, tukang bikin web, jasa web murah yogyakarta, bikin website cepat, jasa web toko online jogja, pembuat website profesional jogja, jasa seo website yogyakarta, website murah jogja, freelance web developer jogja, jasa desain web yogyakarta, jasa website sekolah, jasa website custom jogja, bikin landing page yogyakarta, bikin website umkm murah, jasa web umkm, website profil bisnis, buat web profil perusahaan, website company profile elegan, jasa pembuatan web ukm, digitalisasi umkm jogja, harga pembuatan website umkm, website company profile profesional, jasa buat web ukm, bikin web profil bisnis jogja, jasa website ukm yogyakarta, web umkm terbaik, pembuat web company profile jogja, paket website umkm murah, jasa desain company profile website",
  authors: [{ name: "SebatasWeb" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Jasa Pembuatan Website Murah & Profesional | SebatasWeb",
    description: "SebatasWeb melayani jasa pembuatan website perusahaan, toko online, company profile, dan UMKM dengan harga murah dan kualitas profesional.",
    url: "https://sebatasweb.com",
    siteName: "SebatasWeb",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website Murah dan Profesional - SebatasWeb",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Murah & Profesional",
    description: "SebatasWeb melayani jasa pembuatan website perusahaan, toko online, company profile, dan UMKM dengan harga murah dan kualitas profesional.",
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
