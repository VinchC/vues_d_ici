"use client";

import { Spacing } from "./_components/utils/Spacing";
import { Hero } from "./_components/Hero";
import { LastArticles } from "./_components/[Articles]/LastArticles";
import { WhereToFind } from "./_components/WhereToFind";

export default function Home() {
  return (
    <>
      <main id="maincontent">
        <Spacing size="sm" />
        <Hero />
        <Spacing size="sm" />
        <LastArticles />
        <Spacing size="sm" />
        <WhereToFind />
        <Spacing size="sm" />
      </main>
    </>
  );
}
