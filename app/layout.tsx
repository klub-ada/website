import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { anaheim } from "./fonts";

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
      <body
        className={`${anaheim.className} antialiased max-w-screen-2xl mx-auto`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
