"use client";

import { Card } from "@/components/ui/card";
import { Section } from "../_components/utils/Section";
import { ARTICLES, CATEGORIES } from "../data/data";
import { ArticleCard } from "../_components/[Articles]/ArticleCard";
import { Spacing } from "../_components/utils/Spacing";
import Link from "next/link";
import { useState } from "react";
import Search from "../_components/utils/Search";

export default function ArticlePage() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Spacing size="sm" />
      <Section className="section justify-center mt-8 max-lg:mt-20">
        <Card className="p-4 gap-2">
          <h2 className="text-2xl mb-4">Nos articles et journaux</h2>
          <p className="paragraph">Rechercher le contenu d&apos;un article</p>
          <Search search={search} handleSearchUpdate={setSearch} />
          <p className="paragraph">Filtrer par catégorie</p>
          <div className="footerAndCategories">
            {CATEGORIES.map((category, index) => (
              <button key={index} className="categoryLink">
                {category.title}
              </button>
            ))}
          </div>
          <div className="lastArticleGrid">
            {ARTICLES.filter(
              (article) =>
                article.title.toLowerCase().includes(search.toLowerCase()) ||
                article.text?.toLowerCase().includes(search.toLowerCase()) ||
                article.chapeau?.toLowerCase().includes(search.toLowerCase())
            )
              .sort((a, b) => b.id - a.id)
              .map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
          </div>
        </Card>
      </Section>
    </>
  );
}
