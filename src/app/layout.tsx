import "./globals.css"

import { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Toaster } from "sonner"
import { cn } from "@/lib/utils"

import ReactQueryClientProvider from "./providers/react-query"

const cairo = Cairo({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Store",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryClientProvider>
      <html lang="ar" dir="rtl" className="scroll-smooth">
        <body className={cn(cairo.className)}>
          <Toaster position="top-center" />
          {children}
        </body>
      </html>
    </ReactQueryClientProvider>
  )
}
