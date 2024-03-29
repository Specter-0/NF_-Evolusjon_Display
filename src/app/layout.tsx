import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Databreach",
  description: "Naturfag prøvesvar",
};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
        <body className="bg-gradient-to-b from-[#CBD6E0] to-[#8CA6BB]">
            {children}
        </body>
    </html>
  );
}
