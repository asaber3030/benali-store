import type { Metadata } from "next";
import { Cairo } from "next/font/google";

import { Providers } from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Benali Store",
  description: "Displays all available products and services provided by me",
};

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
