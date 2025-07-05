import type { Metadata } from "next";
import { Xanh_Mono, Inconsolata } from "next/font/google";
import "./globals.css";

const xanh = Xanh_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-xanh-mono",
});

const incol = Inconsolata({
  variable: "--font-incolsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eulerbutcooler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${xanh.variable} ${incol.variable} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
