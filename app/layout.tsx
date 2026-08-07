import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6d28d9",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vynex.pk"),

  title: {
    default: "Vynex | Premium VPS Hosting & Web Hosting in Pakistan",
    template: "%s | Vynex",
  },

  description:
    "Vynex provides fast, secure, and affordable VPS hosting, web hosting, and server solutions in Pakistan with reliable performance and professional support.",

  keywords: [
    "Vynex",
    "vynex.pk",
    "VPS hosting Pakistan",
    "web hosting Pakistan",
    "Pakistan VPS",
    "cheap VPS hosting",
    "premium hosting",
    "cloud hosting Pakistan",
    "server hosting Pakistan",
    "Windows VPS Pakistan",
    "Linux VPS Pakistan",
    "RDP hosting",
    "dedicated servers Pakistan",
    "NVMe VPS",
    "business email hosting",
    "SSL certificates Pakistan",
  ],

  authors: [{ name: "Vynex", url: "https://vynex.pk" }],
  creator: "Vynex",
  publisher: "Vynex",
  generator: "Next.js",

  // ========== CANONICAL ==========
  alternates: {
    canonical: "https://vynex.pk",
    languages: {
      "en-US": "https://vynex.pk",
      "en-PK": "https://vynex.pk",
    },
  },

  // ========== OPEN GRAPH ==========
  openGraph: {
    title: "Vynex | Premium VPS Hosting & Web Hosting in Pakistan",
    description:
      "Fast, secure, and affordable VPS hosting, web hosting, and server solutions by Vynex.",
    url: "https://vynex.pk",
    siteName: "Vynex",
    type: "website",
    locale: "en_PK",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "https://vynex.pk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vynex - Premium VPS Hosting in Pakistan",
        type: "image/jpeg",
      },
    ],
  },

  // ========== TWITTER ==========
  twitter: {
    card: "summary_large_image",
    title: "Vynex | Premium VPS Hosting & Web Hosting in Pakistan",
    description:
      "Fast, secure, and affordable VPS hosting, web hosting, and server solutions by Vynex.",
    images: ["https://vynex.pk/og-image.jpg"],
    creator: "@vynexpk",
    site: "@vynexpk",
  },

  // ========== ROBOTS ==========
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ========== VERIFICATION ==========
  verification: {
    google: "BxsMPw3Hn9R9G-6RNY_fkC_AUIjy5JJ7p9Kn9TfhSSk",
    // Add other verification codes if needed
    // yandex: "your-yandex-verification",
    // bing: "your-bing-verification",
  },

  // ========== CATEGORY ==========
  category: "technology",

  // ========== APPLE WEB APP ==========
  appleWebApp: {
    capable: true,
    title: "Vynex",
    statusBarStyle: "black-translucent",
  },

  // ========== ICONS ==========
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#6d28d9",
      },
    ],
  },

  // ========== MANIFEST ==========
  manifest: "/site.webmanifest",

  // ========== OTHER ==========
  other: {
    "msapplication-TileColor": "#6d28d9",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#6d28d9",
  },

  // ========== ARCHIVE ==========
  archives: ["https://vynex.pk"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* ========== GOOGLE SEARCH CONSOLE VERIFICATION ========== */}
        <meta
          name="google-site-verification"
          content="BxsMPw3Hn9R9G-6RNY_fkC_AUIjy5JJ7p9Kn9TfhSSk"
        />

        {/* ========== ADDITIONAL META TAGS ========== */}
        <meta name="theme-color" content="#6d28d9" />
        <meta name="msapplication-TileColor" content="#6d28d9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* ========== PRELOAD CRITICAL ASSETS ========== */}
        <link
          rel="preload"
          href="/hero-server.png"
          as="image"
          type="image/png"
        />

        {/* ========== DNS PREFETCH ========== */}
        <link rel="dns-prefetch" href="https://my.vynex.pk" />
        <link rel="preconnect" href="https://my.vynex.pk" />

        {/* ========== PRELOAD FONTS ========== */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* ========== SCHEMA.ORG STRUCTURED DATA ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://vynex.pk/#organization",
              name: "Vynex",
              url: "https://vynex.pk",
              logo: "https://vynex.pk/logo.png",
              description:
                "Vynex provides fast, secure, and affordable VPS hosting, web hosting, and server solutions in Pakistan.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-123-456789",
                contactType: "Sales",
                availableLanguage: ["English", "Urdu"],
                areaServed: "PK",
              },
              sameAs: [
                "https://facebook.com/vynexpk",
                "https://twitter.com/vynexpk",
                "https://instagram.com/vynexpk",
                "https://youtube.com/vynexpk",
                "https://linkedin.com/company/vynex",
              ],
            }),
          }}
        />

        {/* ========== WEBSITE SCHEMA ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://vynex.pk/#website",
              name: "Vynex",
              url: "https://vynex.pk",
              description:
                "Vynex provides fast, secure, and affordable VPS hosting, web hosting, and server solutions in Pakistan.",
              publisher: {
                "@id": "https://vynex.pk/#organization",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://vynex.pk/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ========== BREADCRUMB SCHEMA ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "@id": "https://vynex.pk/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://vynex.pk",
                },
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}