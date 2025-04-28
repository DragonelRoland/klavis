import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/Layout";
import { LinkIcon, Copy, Image, Mail, Globe, Wrench, Sparkles } from 'lucide-react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Klavis AI",
  description: "AI-powered development platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          {/* Top URL bar */}
          <div className="bg-blue-600 text-white h-8 flex items-center px-3 gap-3">
            <LinkIcon size={16} />
            <span className="text-sm">http://localhost:3000/playground</span>
            <div className="flex-1"></div>
            {/* Tool icons */}
            <div className="flex items-center gap-3">
              <Copy size={16} className="opacity-70 hover:opacity-100 cursor-pointer" />
              <Image size={16} className="opacity-70 hover:opacity-100 cursor-pointer" />
              <Mail size={16} className="opacity-70 hover:opacity-100 cursor-pointer" />
              <Globe size={16} className="opacity-70 hover:opacity-100 cursor-pointer" />
              <Wrench size={16} className="opacity-70 hover:opacity-100 cursor-pointer" />
              <Sparkles size={16} className="opacity-70 hover:opacity-100 cursor-pointer" />
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-xs font-bold">BR</div>
            </div>
          </div>
          
          {/* Main content with sidebar */}
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
