import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

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
    "Vynex provides fast, secure and affordable VPS hosting, web hosting and server solutions in Pakistan.",

  keywords: [
    "Vynex",
    "VPS Hosting Pakistan",
    "Web Hosting Pakistan",
    "Windows VPS",
    "Linux VPS",
    "RDP Server",
    "NVMe VPS",
    "Cloud Hosting",
    "Dedicated Server Pakistan",
  ],

  authors: [
    {
      name: "Vynex",
      url: "https://vynex.pk",
    },
  ],

  creator: "Vynex",
  publisher: "Vynex",

  alternates: {
    canonical: "https://vynex.pk",
  },

  openGraph: {
    title: "Vynex | Premium VPS Hosting Pakistan",
    description:
      "Fast, secure and affordable VPS hosting solutions by Vynex.",
    url: "https://vynex.pk",
    siteName: "Vynex",
    locale: "en_PK",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vynex VPS Hosting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vynex VPS Hosting Pakistan",
    description:
      "Fast and reliable VPS hosting solutions.",
    images: [
      "/og-image.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google:
      "BxsMPw3Hn9R9G-6RNY_fkC_AUIjy5JJ7p9Kn9TfhSSk",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
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

        <meta
          name="theme-color"
          content="#6d28d9"
        />


        <meta
          name="msapplication-TileColor"
          content="#6d28d9"
        />


        <link
          rel="preload"
          href="/hero-server.png"
          as="image"
          type="image/png"
        />


        <link
          rel="dns-prefetch"
          href="https://my.vynex.pk"
        />


        <link
          rel="preconnect"
          href="https://my.vynex.pk"
        />

      </head>



      <body className="min-h-full flex flex-col">


        {/* Organization Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({

              "@context": "https://schema.org",

              "@type": "Organization",

              "@id":
                "https://vynex.pk/#organization",

              name: "Vynex",

              url:
                "https://vynex.pk",

              logo:
                "https://vynex.pk/logo.png",


              contactPoint: {

                "@type":
                  "ContactPoint",

                telephone:
                  "+92-331-5676118",

                contactType:
                  "Sales",

                areaServed:
                  "PK",

                availableLanguage:
                  [
                    "English",
                    "Urdu",
                  ],
              },


              sameAs: [

                "https://facebook.com/vynexpk",

                "https://twitter.com/vynexpk",

                "https://instagram.com/vynexpk",

                "https://youtube.com/vynexpk",

                "https://linkedin.com/company/vynex",

                "https://wa.me/923315676118",

              ],


            }),
          }}
        />




        {/* Website Schema */}


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({

              "@context":
                "https://schema.org",

              "@type":
                "WebSite",

              name:
                "Vynex",

              url:
                "https://vynex.pk",

            }),
          }}
        />




        <WhatsAppButton />


        {children}


      </body>


    </html>
  );
}