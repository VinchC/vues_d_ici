"use client";

import { Header } from "./_components/Header";
import { Spacing } from "./_components/utils/Spacing";
import { Hero } from "./_components/Hero";
import SkipLink from "./_components/utils/SkipLink";
import { LastArticles } from "./_components/[Articles]/LastArticles";

export default function Home() {
  return (
    <>
      <SkipLink />

      <Header />

      <main id="maincontent">
        <Spacing size="sm" />
        <Hero />
        <Spacing size="sm" />
        <LastArticles />
        <Spacing size="sm" />
      </main>
    </>
  );
}
