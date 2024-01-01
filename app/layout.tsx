"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav";
import { useRouter, usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useEffect } from "react";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    document.title = 'Quantum Quill';
    if(pathname === '/'){
      router.push('/dashboard')
    }
  });
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <Head>
        <title>Quantum Quill</title>
      </Head>
      <body className={cn("theme-zinc", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar></Navbar>
          <div>{children}</div>
          <ThemeSwitcher></ThemeSwitcher>
        </ThemeProvider>
      </body>
    </html>
  );
}
