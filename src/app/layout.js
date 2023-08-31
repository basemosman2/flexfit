import { Navbar } from "@/components";
import "./globals.css";

import {openSans} from "./font";

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
