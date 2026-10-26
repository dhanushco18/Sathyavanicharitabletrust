import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Caveat, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
  weight: ["500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Free Education & Community Welfare Chennai`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL("https://sathiyavanitrust.netlify.app"),
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/brand/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sathiyavanitrust.netlify.app",
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/assets/brand/logo.png",
        width: 800,
        height: 800,
        alt: `${SITE_CONFIG.name} Emblem`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    url: "https://sathiyavanitrust.netlify.app",
    logo: "https://sathiyavanitrust.netlify.app/assets/brand/logo.png",
    description: SITE_CONFIG.description,
    foundingDate: SITE_CONFIG.inceptionYear,
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.founderName,
      jobTitle: SITE_CONFIG.founderRole,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98414-54501",
      contactType: "Community Coordination & Inquiries",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil"],
    },
    knowsAbout: [
      "Free Evening Tuition",
      "School Fee Assistance",
      "Holistic Child Development",
      "Community Outreach",
      "Diwali Joy Clothing Drives",
      "Biodiversity Tree Planting",
    ],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} ${caveat.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-canvas text-slate-900 selection:bg-brand-amber/20 selection:text-brand-navy">
        {/* Accessible Skip to Main Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-navy text-white text-sm font-bold rounded-lg shadow-lg focus:outline focus:outline-2 focus:outline-white"
        >
          Skip to main content
        </a>

        <LanguageProvider>
          <Header />
          <main id="main-content" className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
