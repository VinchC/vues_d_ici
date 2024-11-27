import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vues d'ici | Article",
};

export default function ArticlePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main id="maincontent">{children}</main>;
}
