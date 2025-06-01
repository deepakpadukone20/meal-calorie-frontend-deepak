import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProviderWrapper } from './ThemeProviderWrapper';
import { Header } from '@/components/Header';
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meal Tracker",
  description: "Meal Tracker / Calorie Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProviderWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          {children}
          <footer className="w-full text-sm justify-end sticky bottom-3 pr-5 hidden md:flex"><Link target="_blank" className=" text-blue-400" href={'https://www.deepakpadukone.com'}> {' '}Deepak Padukone Manjunath</Link></footer>
        </body>
      </html>
    </ThemeProviderWrapper>
  );
}
