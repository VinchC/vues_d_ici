"use client";

import Download from "@/app/_components/[Journal]/Download";
import Download2 from "@/app/_components/[Journal]/Download2";
import { JournalArticles } from "@/app/_components/[Journal]/JournalArticles";
import { JournalComponent } from "@/app/_components/[Journal]/JournalComponent";
import { Section } from "@/app/_components/utils/Section";
import { Spacing } from "@/app/_components/utils/Spacing";
import { JournalProps } from "@/app/types";
import { JOURNALS } from "@/data/data";

export default function JournalDetailPage(req: any) {
  const id = parseInt(req.params.id);

  const index = id - 1;
  const maxIndex: number = JOURNALS.length;
  let journal: JournalProps = JOURNALS[index];

  return (
    <>
      <Spacing size="sm" />
      <Download2 {...journal} />
      <Section className="section">
        <JournalComponent {...journal} />
      </Section>
      <Section className="section">
        <JournalArticles {...journal} />
      </Section>
    </>
  );
}
