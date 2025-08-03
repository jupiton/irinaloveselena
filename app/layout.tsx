import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Irina Love Elena",
  description: "A poetic journey through the love of a mother and her daughter",
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
