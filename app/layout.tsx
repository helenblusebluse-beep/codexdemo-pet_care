import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "暖爪宠物洗护店",
  description: "为犬猫提供低刺激洗护、造型修剪、皮毛护理与短时寄养的高端宠物洗护空间。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
