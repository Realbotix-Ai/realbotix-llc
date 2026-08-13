import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, PT_Serif } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/lib/lenis";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const title = "Realbotix — Humanoid Robots for the Service Economy";
const description =
  "Realbotix builds humanoid robots powered by conversational AI — for hospitality, education, wellness, and corporate service.";

export const metadata: Metadata = {
  // TODO: confirm the real production domain before launch.
  metadataBase: new URL("https://realbotix.com"),
  title,
  description,
  // Site is pre-launch — keep it out of search results until SEO pass.
  // Remove once the site is ready to be indexed.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    siteName: "Realbotix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} ${ptSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-base text-fg-primary">
        <LenisProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
