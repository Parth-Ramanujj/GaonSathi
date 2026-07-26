import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaon Sathi",
  description: "Rural-India super-app combining Agri-Tech and Local Services",
};

import { OfflineBanner } from '@gaon-sathi/ui';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OfflineBanner />
        {children}
      </body>
    </html>
  );
}
