import type { Metadata } from "next";
import "./globals.css";
import { anaheim } from "./fonts";
import Script from "next/script";

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
      <head>
        <Script>{`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '230367');`}</Script>
      </head>
      <body
        className={`${anaheim.className} antialiased max-w-screen-2xl mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
