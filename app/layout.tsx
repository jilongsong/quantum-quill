import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { fontSans } from "@/lib/fonts"
import Navbar from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Quantum Quill",
  description: "Quantum Quill",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={cn('theme-zinc',inter.className)}>
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
