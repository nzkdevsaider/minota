"use client";

import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Minota",
  description: "Organiza tus calificaciones.",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="minota">
      <head>
        <link rel="manifest" href={metadata.manifest} />
        <meta name="theme-color" content={metadata.themeColor} />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
