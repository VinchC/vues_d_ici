import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos articles et journaux",
};

export default function ArticlesPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main id="maincontent">{children}</main>;
}
