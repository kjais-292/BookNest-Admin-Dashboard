import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import {ToastProvider} from '../providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "BookNest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ToastProvider/>
        <body className={inter.className}>
        <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem
          >
            <ToastProvider />
            {children}
          </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}
