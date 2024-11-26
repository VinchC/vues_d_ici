import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos articles",
};

export default function ArticlesPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main id="maincontent">{children}</main>;
}
