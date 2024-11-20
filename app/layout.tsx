import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

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
  title: "Vues d'ici - Journal de quartier",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
