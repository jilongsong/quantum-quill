import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Head from "next/head";
import { Metadata } from "next";
import { MusicPlayerProvider } from "@/hooks/useMusicPlayerProvider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Song Beat",
  description: "personal music player",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark" suppressHydrationWarning>
      <Head>
        <title>Quantum Quill</title>
      </Head>
      <body className={cn("theme-zinc", inter.className)}>
        <MusicPlayerProvider>
          <div>{children}</div>
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
