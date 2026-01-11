import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "AI Builder Store - Tài khoản AI Premium cho Dev",
  description: "Cursor Pro, ChatGPT Pro, Gemini Ultra, JetBrains... Tất cả công cụ AI mà dev cần, một chỗ duy nhất. Giá chỉ từ 50k/tháng.",
  keywords: ["AI tools", "Cursor", "ChatGPT", "Gemini", "dev tools", "premium account"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
