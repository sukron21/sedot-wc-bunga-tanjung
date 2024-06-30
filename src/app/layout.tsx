import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sedot WC Tanjung Bunga Tangerang",
  description:
    "Melayani penyedotan wc di wilayah Tangerang Raya, Kota Tangerang, Kabupaten Tangerang dan Tangeran Selatan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: "white" }} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
