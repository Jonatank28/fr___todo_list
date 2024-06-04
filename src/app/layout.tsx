import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter, Lobster } from "next/font/google";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lobster = Lobster({ subsets: ["latin"], variable: "--font-lobster", weight: "400" });

export const metadata: Metadata = {
  title: "Todo List",
  description: "Todo List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lobster.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
