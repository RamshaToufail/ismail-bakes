import type { Metadata } from "next";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://ismail-bakes.vercel.app"),
  title: {
    default: "Ismail Bakes — Handcrafted Bakery & Custom Cakes in Rawalpindi",
    template: "%s | Ismail Bakes",
  },
  description:
    "Small-batch celebration cakes, vintage Lambeth piping, gourmet cupcakes, and dessert cups baked fresh to order with pure dairy butter in Rawalpindi, Pakistan.",
  keywords: [
    "Ismail Bakes",
    "custom cakes Rawalpindi",
    "bakery Rawalpindi",
    "Lambeth cake Pakistan",
    "celebration cakes Islamabad",
    "cupcakes Rawalpindi",
    "handmade desserts Rawalpindi",
  ],
  authors: [{ name: "Ismail Bakes" }],
  creator: "Ismail Bakes",
  openGraph: {
    title: "Ismail Bakes — Handcrafted Bakery & Custom Cakes in Rawalpindi",
    description:
      "Small-batch celebration cakes, vintage Lambeth piping, and artisanal treats baked fresh to order in Rawalpindi, Pakistan.",
    url: "https://ismail-bakes.vercel.app",
    siteName: "Ismail Bakes",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/ismail-bakes-logo.png",
        width: 800,
        height: 800,
        alt: "Ismail Bakes Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismail Bakes — Handcrafted Bakery & Custom Cakes",
    description:
      "Small-batch celebration cakes and artisanal treats baked fresh to order in Rawalpindi, Pakistan.",
    images: ["/ismail-bakes-logo.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Ismail Bakes",
  image: "https://ismail-bakes.vercel.app/ismail-bakes-logo.png",
  description:
    "Small-batch celebration cakes, vintage Lambeth piping, gourmet cupcakes, and dessert cups handcrafted to order in Rawalpindi, Pakistan.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rawalpindi",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "33.5973",
    longitude: "73.0479",
  },
  url: "https://ismail-bakes.vercel.app",
  priceRange: "PKR 1200 - PKR 6500",
  servesCuisine: "Artisanal Cakes & Patisserie",
  sameAs: ["https://www.instagram.com/ismail.bakes/"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
