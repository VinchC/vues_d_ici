"use client";

import { ArticleComponent } from "@/app/_components/[Articles]/ArticleComponent";
import { Section } from "@/app/_components/utils/Section";
import { Spacing } from "@/app/_components/utils/Spacing";
import { ARTICLES } from "../../data/data";

export default function ArticlePage(req: any) {
  const id = req.params.id;
  const article = ARTICLES[(id-1)];

  return (
    <>
      <Spacing size="sm" />
      <Section className="section justify-center mt-8 max-lg:mt-20">
        <ArticleComponent {...article} />
      </Section>
    </>
  );
}
