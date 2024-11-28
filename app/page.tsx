"use client";

import { Spacing } from "./_components/utils/Spacing";
import { LastArticles } from "./_components/[Articles]/LastArticles";
import { BackTheJournal } from "./_components/[Home]/BackTheJournal";
import { WhereToFind } from "./_components/[Home]/WhereToFind";
import { Hero } from "./_components/[Home]/Hero";

export default function Home() {
  return (
    <>
      <Spacing size="sm" />
      <Hero />
      <Spacing size="sm" />
      <LastArticles />
      <Spacing size="sm" />
      <WhereToFind />
      <Spacing size="sm" />
      <BackTheJournal />
      <Spacing size="sm" />
    </>
  );
}
