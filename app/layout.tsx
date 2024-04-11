import React from "react";
import DatabaseProvider from "@/lib/DatabaseProvider";
import { useRouter } from "next/router";
import "./globals.css";
import NavBar from "./components/navbar";
import Xline from "./components/ui/xline";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <NavBar />
        <div className="main">
          <DatabaseProvider>{children}</DatabaseProvider>
        </div>
        <Xline />
        <Footer />
      </body>
    </html>
  );
}
