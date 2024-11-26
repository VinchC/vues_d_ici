"use client";

import { ArticleCard } from "@/app/_components/[Articles]/ArticleCard";
import { ArticleComponent } from "@/app/_components/[Articles]/ArticleComponent";
import Search from "@/app/_components/utils/Search";
import { Section } from "@/app/_components/utils/Section";
import { Spacing } from "@/app/_components/utils/Spacing";
import { ArticleProps } from "@/app/types";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ARTICLES } from "../../data/data";

export default function ArticlePage() {
  const [article, setArticle] = useState<ArticleProps | null>(null);

 
  return (
    <>
      <Spacing size="sm" />
      <Section className="section justify-center mt-8 max-lg:mt-20">
        <Card className="p-4 gap-2">
          <h2 className="text-2xl mb-4">Titre de l&apos;article</h2>
          <p className="paragraph">Rechercher le contenu d&apos;un article</p>
          <Search search={search} handleSearchUpdate={setSearch} />
          <ArticleComponent article={article} />
        </Card>
      </Section>
    </>
  );
}
