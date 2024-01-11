import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Reference from "./components/Reference";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor Challenge",
  description: "A Challenge from Frontend Mentor!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col items-center justify-center`}
      >
        {children}
        <Reference />
      </body>
    </html>
  );
}
