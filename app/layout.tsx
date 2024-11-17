import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navbar";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
