import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-bodoni",
});

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const description =
  "A new house of conscious modern luxury, born in Surat. Lab-grown diamonds, set in recycled 18K gold — brilliance that asks nothing of the earth it came from.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mayavé — Conscious Modern Luxury",
    template: "%s · Mayavé",
  },
  description,
  keywords: [
    "Mayavé",
    "lab-grown diamonds",
    "recycled gold",
    "conscious luxury",
    "Surat jewellery",
    "fine jewellery",
  ],
  authors: [{ name: "Mayavé" }],
  openGraph: {
    type: "website",
    siteName: "Mayavé",
    title: "Mayavé — Conscious Modern Luxury",
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayavé — Conscious Modern Luxury",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#8d0124",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable} no-js`}>
      <body>
        <script
          // Swap `no-js` → `js` before paint so scroll-reveal elements only
          // start hidden when JavaScript is available to reveal them again.
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');",
          }}
        />
        {children}
      </body>
    </html>
  );
}
