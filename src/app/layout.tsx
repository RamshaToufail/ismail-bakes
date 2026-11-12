import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import { CartProvider } from "@/lib/cart-context";
export const metadata: Metadata = { title: "Ismail Bakes — Made for your sweetest moments", description: "Small-batch cakes and desserts, lovingly made to order in Rawalpindi." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><CartProvider><SiteHeader />{children}<SiteFooter /></CartProvider></body></html>; }
