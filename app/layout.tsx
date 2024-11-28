import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import SkipLink from "./_components/utils/SkipLink";
import Footer from "./_components/[Footer]/Footer";
import { Header } from "./_components/utils/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "Vues d'ici | %s",
    default: "Vues d'ici - Journal de quartier",
  },
  description:
    "L'actu locale par et pour les habitants. Vues d'ici est un journal et indépendant soutenu par les habitants des quartiers Belleville, Jourdain, Butts-Chaumonts et Place des Fêtes à Paris.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} h-full`}>
        <SkipLink />

        <Providers>
          <Header />
          <main id="maincontent">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
