import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "College Survival OS™",
  description:
    "An unnecessarily advanced operating system for surviving college.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}