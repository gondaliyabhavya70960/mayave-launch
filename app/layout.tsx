import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    <html lang="en" className="no-js">
      <body>
        <link
          rel="preconnect"
          href="https://use.typekit.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ouk6mfp.css"
          precedence="default"
        />
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
