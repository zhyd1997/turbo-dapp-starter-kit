import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";

import "@rainbow-me/rainbowkit/styles.css";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Turbo DApp Starter Kit",
  description:
    "The ultimate Web3 development toolkit for building decentralized applications with Next.js 15, wagmi, RainbowKit, Hardhat, Tailwind CSS v4, and shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
