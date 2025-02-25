import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Otineo",
  description: "Welcome to Otineo's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="light" suppressHydrationWarning>
      <body
        className={`${geist.className} antialiased bg-white text-foreground min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
