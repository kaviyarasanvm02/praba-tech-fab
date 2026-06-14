import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "PEB Manufacturer | Pre-Engineered Building Solutions",
  description: "Leading PEB manufacturer providing high-strength industrial buildings, commercial warehouses, and heavy structural steel solutions.",
  metadataBase: new URL("https://prabatechpeb.com"),
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "PEB Manufacturer | Pre-Engineered Building Solutions",
    description: "Leading PEB manufacturer providing high-strength industrial buildings, commercial warehouses, and heavy structural steel solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Praba Tech Steel Solutions"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col pt-[102px] lg:pt-[106px]">
        {/* Top Information Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-800 py-2.5 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <a href="tel:+919894737363" className="hover:text-white transition-colors">+91 98947 37363</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <a href="mailto:Prabatechfab@gmail.com" className="hover:text-white transition-colors">Prabatechfab@gmail.com</a>
              </span>
            </div>
            <div className="flex items-center gap-1.5 hidden sm:flex">
              <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>Karur, Tamil Nadu</span>
            </div>
          </div>
        </div>

        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
