"use client";

import { Summary } from "@/app/_components/[Journal]/Summary";
import { Section } from "@/app/_components/utils/Section";
import { Spacing } from "@/app/_components/utils/Spacing";
import { JOURNALS } from "@/data/data";

export default function JournalPage(req: any) {
  const id = req.params.id;

  const index = id - 1;
  const journal = JOURNALS[index];

  return (
    <>
      <Spacing size="sm" />
      <Section className="section">
        <Summary {...journal} />
      </Section>
    </>
  );
}
