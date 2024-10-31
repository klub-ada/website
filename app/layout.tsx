import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klub Ada",
  description: "Website for Klub Ada community for women in tech in Slovenia.",
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
