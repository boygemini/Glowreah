"use client";
import "./globals.css";

import React, { useState } from "react";
import DatabaseProvider from "@/app/contexts/DatabaseProvider";
import { itemObject, ShopContent, ShopContext } from "./contexts/ShopContext";
import { useRouter } from "next/router";
import NavBar from "./components/navbar";
import Xline from "./components/ui/xline";
import Footer from "./components/footer";
import Newsletter from "./components/newsletter";

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
        <div className="main">{children}</div>
        <Newsletter />
        <Xline />
        <Footer />
      </body>
    </html>
  );
}
