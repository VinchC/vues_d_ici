"use client";

import { Header } from "./_components/Header";
import { Spacing } from "./_components/utils/Spacing";
import { Hero } from "./_components/Hero";
import SkipLink from "./_components/utils/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />

      <Header />

      <main id="maincontent">
        <Spacing size="sm" />
        <Hero />
        <Spacing size="sm" />
      </main>
    </>
  );
}
