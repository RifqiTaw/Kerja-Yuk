import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KerjaYuk!",
  description: "Employee attendance and notification app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-grey-50`}>{children}</body>
    </html>
  );
}
