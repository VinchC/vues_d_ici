"use client";

import { JournalComponent } from "@/app/_components/[Journal]/JournalComponent";
import { Section } from "@/app/_components/utils/Section";
import { Spacing } from "@/app/_components/utils/Spacing";
import { JOURNALS } from "@/data/data";

export default function JournalDetailPage(req: any) {
  const id = req.params.id;

  const index = id - 1;
  const journal = JOURNALS[index];

  return (
    <>
      <Spacing size="sm" />
      <Section className="section">
      <JournalComponent {...journal} />
      </Section>
    </>
  );
}
