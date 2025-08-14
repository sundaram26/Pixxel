import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import FloatingShapes from "@/components/floating-shape";
import Header from "@/components/header";
import { ConvexClientProvider } from "./convexClientProvider";
import { ClerkProvider } from "@clerk/nextjs"
import {shadesOfPurple} from "@clerk/themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pixxel",
  description: "AI Image Editor"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
              baseTheme: shadesOfPurple,
            }}
          >
            <ConvexClientProvider>
              <Header />
              <main className="bg-slate-900 min-h-[2000px] text-white overflow-x-hidden">
                <FloatingShapes />
                <Toaster richColors />
                {children}
              </main>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
