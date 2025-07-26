import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import FloatingShapes from "@/components/floating-shape";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixxel",
  description: "AI Image Editor",
};

export default function RootLayout({
  children,
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
          
          <main className="bg-slate-900 min-h-[2000px] text-white overflow-x-hidden">
            <FloatingShapes />
            <Toaster richColors />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
