import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { headers } from "next/headers";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

// Static metadata used as a base for generateMetadata
const STATIC_METADATA = {
  title: {
    default:
      "Bharath Painters | Painting, waterproofing, texture Cleaning & More",
    template: "%s | Bharath Painters",
  },
  description:
    "Professional home services focused on deep cleaning, exterior & interior painting, grouting, texture finishes, wallpapers and waterproofing. Quality workmanship guaranteed.",
  keywords:
    "home services, deep cleaning, exterior painting, interior painting, grouting, texture finishes, wallpapers, waterproofing, home improvement, professional services, bharath painters",
  authors: [{ name: "Bharath Painters" }],
  creator: "Bharath Painters",
  publisher: "Bharath Painters",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://www.bharathpainters.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bharath Painters | Quality Home Improvement Solutions",
    description:
      "Transform your home with our professional services including deep cleaning, interior & exterior painting, grouting, textures, wallpapers and waterproofing. Quality guaranteed.",
    url: "https://www.bharathpainters.com",
    siteName: "Bharath Painters",
    locale: "en_US",
    type: "website",
    images: [
      {
        // url: "./logo.png",
        url: "https://www.bharathpainters.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Bharath Painters - Professional Home Improvement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharath Painters | Quality Home Improvement",
    description:
      "Transform your home with our professional services including deep cleaning, painting, grouting, textures, wallpapers and waterproofing.",
    images: ["https://www.bharathpainters.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Professional Home Services",
              // image: "./logo.png",
              image: "https://www.bharathpainters.com/logo.png",
              telephone: "+91 8884563601",
              email: "info@bharathpainters.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Kudlu Gate, AECS Layout - A Block, Hal Layout, Singasandra",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560068",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.7128,
                longitude: -74.006,
              },
              url: "https://www.bharathpainters.com",
              sameAs: [
                "https://www.facebook.com/bharathpainters",
                "https://www.instagram.com/bharathpainters",
              ],
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
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              priceRange: "₹",
              servesCuisine: "Home Services",
            }),
          }}
        />
        {/* Organization / Corporation schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Bharath Painters",
  "alternateName": "Bharath Painters",
  "url": "https://www.bharathpainters.com/",
  "logo": "https://www.bharathpainters.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "8884563601",
    "contactType": "customer service",
    "contactOption": "TollFree",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61585119941074",
    "https://x.com/BharathPainters",
    "https://www.instagram.com/bharath_painters/"
  ]
}`,
          }}
        />
      </head>
      <body className={inter.className}>
        <GoogleTagManager gtmId="GTM-NW7MQZ5X" />
        <GoogleAnalytics gaId="G-NVSNJLQ7WZ" />
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NW7MQZ5X" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// Dynamic metadata generator to create a per-request canonical URL
export async function generateMetadata() {
  try {
    const hdrs = await headers();
    const host = hdrs.get("host") || "www.bharathpainters.com";
    // prefer forwarded proto if present (Vercel/Proxies)
    const proto = hdrs.get("x-forwarded-proto") || "https";
    // Try to derive the requested path from x-invoke-path or referer as a fallback
    const pathFromInvoke = hdrs.get("x-invoke-path") || "";
    const referer = hdrs.get("referer");
    let pathname = "/";
    if (pathFromInvoke) {
      pathname = pathFromInvoke;
    } else if (referer) {
      try {
        pathname = new URL(referer).pathname || "/";
      } catch (e) {
        pathname = "/";
      }
    }

    const canonical = `${proto}://${host}${pathname}`;

    return {
      ...STATIC_METADATA,
      alternates: {
        canonical,
      },
    };
  } catch (e) {
    return {};
  }
}
