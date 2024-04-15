"use client";

import React, { useState } from "react";
import DatabaseProvider from "@/lib/DatabaseProvider";
import { useRouter } from "next/router";
import "./globals.css";
import NavBar from "./components/navbar";
import Xline from "./components/ui/xline";
import Footer from "./components/footer";
import { ShopContent, ShopContext } from "./contexts/ShopContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collectionTitle, setCollectionTitle] =
    useState<string>("Women's in Vogue");
  const [collectionList, setCollectionList] = useState<object[]>([]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <NavBar />
        <div className="main">
          <DatabaseProvider>
            <ShopContext.Provider
              value={{
                collectionList,
                collectionTitle,
                setCollectionList,
                setCollectionTitle,
              }}
            >
              {children}
            </ShopContext.Provider>
          </DatabaseProvider>
        </div>
        <Xline />
        <Footer />
      </body>
    </html>
  );
}
