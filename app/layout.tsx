import React from "react";
import DatabaseProvider from "@/lib/DatabaseProvider";
import { useRouter } from "next/router";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <DatabaseProvider>{children}</DatabaseProvider>
      </body>
    </html>
  );
}
