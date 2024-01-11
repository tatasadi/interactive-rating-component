import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import Reference from "./components/Reference";

const overpass = Overpass({ subsets: ["latin"], weight: ["400", "700"] });

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
        className={`${overpass.className} flex min-h-screen flex-col items-center justify-center`}
      >
        {children}
        <Reference />
      </body>
    </html>
  );
}
