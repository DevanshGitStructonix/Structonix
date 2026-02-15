import type { Metadata } from "next";
import { Manrope, Work_Sans } from "next/font/google"; // Changed Raleway to Manrope
import "./globals.css";
import { MainLayout } from "@/components/Global/MainLayout";

// Primary Font
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// Secondary Font
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Structonix - Industrial Solutions",
  description: "Professional industrial and construction solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${workSans.variable} antialiased bg-white`} // Updated variable
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
