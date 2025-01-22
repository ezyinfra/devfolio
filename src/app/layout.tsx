import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rakesh-Portfolio",
  description:
    "DevOps engineer skilled in cloud infrastructure, automation, and CI/CD pipelines...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="h-20"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
