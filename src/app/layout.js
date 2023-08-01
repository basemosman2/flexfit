import { Navbar } from "@/components";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "FlexFit - Gym",
  description: "FlexFit - MAKE YOUR BODY FLEXIBLE & FIT & PERFECT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favIcon.png" />
      </head>
      <body className={openSans.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
