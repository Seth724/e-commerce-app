import type React from "react"
import type { Metadata } from "next"
import { NavBar } from "@/components/navbar"
import { ToastContainer } from "@/components/toast-notification"
import { CartProvider } from "@/lib/cart-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "TechHub - Premium Tech Accessories",
  description: "Shop premium tech accessories and electronics",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <CartProvider>
          <NavBar />
          {children}
          <ToastContainer />
        </CartProvider>
      </body>
    </html>
  )
}
