import type { Metadata } from "next";
import "./globals.css";
import { OfflineBanner } from '@/lib/ui';
import { GaonSathiProvider } from '@/lib/store/GaonSathiContext';
import { RoleSwitcherBar } from '@/components/RoleSwitcherBar';

export const metadata: Metadata = {
  title: "Gaon Sathi - ગ્રામ સાથી",
  description: "Rural-India super-app combining Agri-Tech, Local Services, and Marketplaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GaonSathiProvider>
          <RoleSwitcherBar />
          <OfflineBanner />
          {children}
        </GaonSathiProvider>
      </body>
    </html>
  );
}

