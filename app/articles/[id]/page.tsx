"use client";

import { ArticleComponent } from "@/app/_components/[Articles]/ArticleComponent";
import { Section } from "@/app/_components/utils/Section";
import { Spacing } from "@/app/_components/utils/Spacing";
import { ARTICLES } from "@/data/data";

export default function ArticleDetailPage(req: any) {
  const id = req.params.id;

  const index = id - 1;
  const article = ARTICLES[index];

  console.log(article);

  return (
    <>
      <Spacing size="sm" />
      <Section className="section">
        <ArticleComponent {...article} />
      </Section>
    </>
  );
}
